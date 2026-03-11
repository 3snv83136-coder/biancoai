import React, { useState, useEffect, useCallback } from 'react';

const API = '/api';

function getToken(): string | null {
  return localStorage.getItem('admin_token');
}

function authHeaders(): Record<string, string> {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}

async function api(path: string, options: RequestInit = {}) {
  const res = await fetch(API + path, { ...options, headers: { ...authHeaders(), ...options.headers } });
  if (res.status === 401) {
    localStorage.removeItem('admin_token');
    window.location.reload();
    throw new Error('Non autorise');
  }
  return res.json();
}

// ============================================================
// Login
// ============================================================
const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetch(API + '/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      }).then(r => r.json());
      if (data.token) {
        localStorage.setItem('admin_token', data.token);
        onLogin();
      } else {
        setError(data.error || 'Erreur de connexion');
      }
    } catch {
      setError('Erreur de connexion');
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '3rem', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,.1)', width: '100%', maxWidth: 400 }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem', color: '#222' }}>Bianco Admin</h1>
        {error && <p style={{ color: '#e74c3c', textAlign: 'center', marginBottom: '1rem', fontSize: '.9rem' }}>{error}</p>}
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Mot de passe"
          required
          autoFocus
          style={{ width: '100%', padding: '.8rem 1rem', border: '1px solid #ddd', borderRadius: 8, fontSize: '1rem', marginBottom: '1rem', boxSizing: 'border-box' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ width: '100%', padding: '.8rem', background: '#b08d6e', color: '#fff', border: 'none', borderRadius: 8, fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
        >
          {loading ? 'Connexion...' : 'Connexion'}
        </button>
      </form>
    </div>
  );
};

// ============================================================
// Dashboard
// ============================================================
const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({ posts: 0, sections: 0, items: 0 });

  useEffect(() => {
    Promise.all([api('/posts'), api('/prices')]).then(([postsData, pricesData]) => {
      const posts = postsData?.posts?.length || 0;
      const sections = pricesData?.sections?.length || 0;
      const items = (pricesData?.sections || []).reduce((sum: number, s: any) => sum + (s.items?.length || 0), 0);
      setStats({ posts, sections, items });
    });
  }, []);

  return (
    <div>
      <h1 style={styles.title}>Tableau de bord</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <StatCard number={stats.posts} label="Articles" />
        <StatCard number={stats.sections} label="Sections tarifs" />
        <StatCard number={stats.items} label="Prestations" />
      </div>
    </div>
  );
};

const StatCard: React.FC<{ number: number; label: string }> = ({ number, label }) => (
  <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,.06)', textAlign: 'center' }}>
    <div style={{ fontSize: '2rem', fontWeight: 700, color: '#b08d6e' }}>{number}</div>
    <div style={{ fontSize: '.85rem', color: '#888', marginTop: '.3rem' }}>{label}</div>
  </div>
);

// ============================================================
// Posts List
// ============================================================
const PostsList: React.FC<{ onEdit: (id: string) => void; onNew: () => void }> = ({ onEdit, onNew }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [msg, setMsg] = useState('');

  const load = useCallback(() => {
    api('/posts').then(d => setPosts(d?.posts || []));
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cet article ?')) return;
    await api('/posts?id=' + encodeURIComponent(id), { method: 'DELETE' });
    setMsg('Article supprime.');
    load();
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <h1 style={{ ...styles.title, marginBottom: 0 }}>Articles</h1>
        <button onClick={onNew} style={styles.btn}>+ Nouveau</button>
      </div>
      {msg && <div style={styles.success}>{msg}</div>}
      <div style={styles.card}>
        {posts.length === 0 ? (
          <p>Aucun article pour le moment.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>{['Titre', 'Date', 'Tags', 'Actions'].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {posts.map(p => (
                <tr key={p.id}>
                  <td style={styles.td}>{p.title}</td>
                  <td style={styles.td}>{p.date}</td>
                  <td style={styles.td}>{(p.tags || []).join(', ')}</td>
                  <td style={styles.td}>
                    <button onClick={() => onEdit(p.id)} style={{ ...styles.btn, ...styles.btnSm, marginRight: '.5rem' }}>Modifier</button>
                    <button onClick={() => handleDelete(p.id)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger }}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

// ============================================================
// Post Form
// ============================================================
const PostForm: React.FC<{ postId?: string; onBack: () => void }> = ({ postId, onBack }) => {
  const [form, setForm] = useState({ title: '', excerpt: '', content: '', tags: '', meta_desc: '', date: new Date().toISOString().slice(0, 10), images: [] as any[] });
  const [saving, setSaving] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  useEffect(() => {
    if (postId) {
      api('/posts?id=' + encodeURIComponent(postId)).then(p => {
        if (p && !p.error) {
          setForm({ ...p, tags: (p.tags || []).join(', '), images: p.images || [] });
        }
      });
    }
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    let images = [...form.images];

    // Upload new files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fname = 'img-' + Date.now() + '-' + i + '.' + (file.name.split('.').pop() || 'jpg');
        const token = getToken();
        const uploadRes = await fetch(API + '/upload?filename=' + encodeURIComponent(fname), {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: file,
        });
        const uploadData = await uploadRes.json();
        if (uploadData.url) {
          images.push({ file: fname, url: uploadData.url, caption: '' });
        }
      }
    }

    const body = { ...form, images };
    if (postId) {
      await api('/posts?id=' + encodeURIComponent(postId), { method: 'PUT', body: JSON.stringify(body) });
    } else {
      await api('/posts', { method: 'POST', body: JSON.stringify(body) });
    }

    setSaving(false);
    onBack();
  };

  const removeImage = (idx: number) => {
    setForm(f => ({ ...f, images: f.images.filter((_, i) => i !== idx) }));
  };

  return (
    <div>
      <h1 style={styles.title}>{postId ? "Modifier l'article" : 'Nouvel article'}</h1>
      <div style={styles.card}>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Titre</label>
          <input style={styles.input} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />

          <label style={styles.label}>Date</label>
          <input style={styles.input} type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />

          <label style={styles.label}>Extrait</label>
          <textarea style={{ ...styles.input, minHeight: 80 }} value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} />

          <label style={styles.label}>Contenu (HTML)</label>
          <textarea style={{ ...styles.input, minHeight: 200 }} value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} />

          <label style={styles.label}>Tags (virgules)</label>
          <input style={styles.input} value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))} />

          <label style={styles.label}>Meta description SEO</label>
          <input style={styles.input} value={form.meta_desc} onChange={e => setForm(f => ({ ...f, meta_desc: e.target.value }))} maxLength={160} />

          {form.images.length > 0 && (
            <>
              <label style={styles.label}>Images existantes</label>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
                {form.images.map((img: any, i: number) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <img src={img.url || `/admin/uploads/blog/${img.file}`} alt={img.caption || ''} style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 8 }} />
                    <div><button type="button" onClick={() => removeImage(i)} style={{ fontSize: '.8rem', color: '#e74c3c', background: 'none', border: 'none', cursor: 'pointer' }}>Retirer</button></div>
                  </div>
                ))}
              </div>
            </>
          )}

          <label style={styles.label}>Nouvelles images</label>
          <input type="file" multiple accept="image/*" onChange={e => setFiles(e.target.files)} style={{ marginTop: '.3rem' }} />

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <button type="submit" disabled={saving} style={styles.btn}>{saving ? 'Enregistrement...' : postId ? 'Mettre a jour' : 'Publier'}</button>
            <button type="button" onClick={onBack} style={{ ...styles.btn, background: '#888' }}>Annuler</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ============================================================
// Prices
// ============================================================
const PricesPage: React.FC = () => {
  const [sections, setSections] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    api('/prices').then(d => setSections(d?.sections || []));
  }, []);

  const addSection = () => {
    setSections(s => [...s, { id: 'section_' + Date.now(), title: '', items: [] }]);
  };

  const addItem = (si: number) => {
    setSections(s => s.map((sec, i) => i === si ? { ...sec, items: [...sec.items, { id: 'item_' + Date.now(), label: '', price: '', unit: '\u20ac', description: '' }] } : sec));
  };

  const updateSection = (si: number, title: string) => {
    setSections(s => s.map((sec, i) => i === si ? { ...sec, title } : sec));
  };

  const updateItem = (si: number, ii: number, field: string, value: string) => {
    setSections(s => s.map((sec, i) => i === si ? { ...sec, items: sec.items.map((item: any, j: number) => j === ii ? { ...item, [field]: value } : item) } : sec));
  };

  const removeItem = (si: number, ii: number) => {
    setSections(s => s.map((sec, i) => i === si ? { ...sec, items: sec.items.filter((_: any, j: number) => j !== ii) } : sec));
  };

  const removeSection = (si: number) => {
    setSections(s => s.filter((_, i) => i !== si));
  };

  const handleSave = async () => {
    setSaving(true);
    await api('/prices', { method: 'PUT', body: JSON.stringify({ sections }) });
    setMsg('Tarifs enregistres.');
    setSaving(false);
  };

  return (
    <div>
      <h1 style={styles.title}>Gestion des tarifs</h1>
      {msg && <div style={styles.success}>{msg}</div>}
      <div style={styles.card}>
        {sections.map((sec, si) => (
          <div key={sec.id} style={{ border: '1px solid #eee', padding: '1rem', borderRadius: 8, marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <input style={{ ...styles.input, fontWeight: 600 }} value={sec.title} onChange={e => updateSection(si, e.target.value)} placeholder="Nom de la section" />
              <button type="button" onClick={() => removeSection(si)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger }}>X</button>
            </div>
            {sec.items.map((item: any, ii: number) => (
              <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '1fr 100px 60px', gap: '.5rem', marginTop: '.5rem', alignItems: 'end' }}>
                <input style={styles.input} value={item.label} onChange={e => updateItem(si, ii, 'label', e.target.value)} placeholder="Prestation" />
                <input style={styles.input} value={item.price} onChange={e => updateItem(si, ii, 'price', e.target.value)} placeholder="Prix" />
                <button type="button" onClick={() => removeItem(si, ii)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger }}>X</button>
              </div>
            ))}
            <button type="button" onClick={() => addItem(si)} style={{ ...styles.btn, ...styles.btnSm, marginTop: '.5rem' }}>+ Prestation</button>
          </div>
        ))}
        <button type="button" onClick={addSection} style={{ ...styles.btn, ...styles.btnSm, marginBottom: '1rem' }}>+ Section</button>
        <div>
          <button onClick={handleSave} disabled={saving} style={styles.btn}>{saving ? 'Enregistrement...' : 'Enregistrer les tarifs'}</button>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// Settings
// ============================================================
const SettingsPage: React.FC = () => {
  const [form, setForm] = useState({ site_url: '', site_name: '', site_description: '', new_password: '' });
  const [msg, setMsg] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api('/settings').then(d => {
      setForm(f => ({ ...f, site_url: d.site_url || '', site_name: d.site_name || '', site_description: d.site_description || '' }));
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await api('/settings', { method: 'PUT', body: JSON.stringify(form) });
    setMsg('Parametres enregistres.');
    setForm(f => ({ ...f, new_password: '' }));
    setSaving(false);
  };

  return (
    <div>
      <h1 style={styles.title}>Parametres</h1>
      {msg && <div style={styles.success}>{msg}</div>}
      <div style={styles.card}>
        <form onSubmit={handleSave}>
          <label style={styles.label}>URL du site</label>
          <input style={styles.input} type="url" value={form.site_url} onChange={e => setForm(f => ({ ...f, site_url: e.target.value }))} required />

          <label style={styles.label}>Nom du site</label>
          <input style={styles.input} value={form.site_name} onChange={e => setForm(f => ({ ...f, site_name: e.target.value }))} required />

          <label style={styles.label}>Description du site</label>
          <input style={styles.input} value={form.site_description} onChange={e => setForm(f => ({ ...f, site_description: e.target.value }))} />

          <label style={styles.label}>Nouveau mot de passe (vide = inchange)</label>
          <input style={styles.input} type="password" value={form.new_password} onChange={e => setForm(f => ({ ...f, new_password: e.target.value }))} placeholder="Nouveau mot de passe" />

          <div style={{ marginTop: '1.5rem' }}>
            <button type="submit" disabled={saving} style={styles.btn}>{saving ? 'Enregistrement...' : 'Enregistrer'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ============================================================
// Main Admin Page
// ============================================================
const AdminPage: React.FC = () => {
  const [logged, setLogged] = useState(!!getToken());
  const [page, setPage] = useState<string>('dashboard');
  const [editId, setEditId] = useState<string | undefined>();

  if (!logged) return <LoginForm onLogin={() => setLogged(true)} />;

  const menu = [
    { key: 'dashboard', label: 'Tableau de bord' },
    { key: 'posts', label: 'Articles' },
    { key: 'post_new', label: 'Nouvel article' },
    { key: 'prices', label: 'Tarifs' },
    { key: 'settings', label: 'Parametres' },
  ];

  const logout = () => {
    localStorage.removeItem('admin_token');
    setLogged(false);
  };

  const renderPage = () => {
    switch (page) {
      case 'dashboard': return <Dashboard />;
      case 'posts': return <PostsList onEdit={(id) => { setEditId(id); setPage('post_edit'); }} onNew={() => setPage('post_new')} />;
      case 'post_new': return <PostForm onBack={() => setPage('posts')} />;
      case 'post_edit': return <PostForm postId={editId} onBack={() => setPage('posts')} />;
      case 'prices': return <PricesPage />;
      case 'settings': return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <nav style={{ width: 250, background: '#222', color: '#fff', padding: '1.5rem 0', flexShrink: 0 }}>
        <h2 style={{ padding: '0 1.5rem', marginBottom: '2rem', fontSize: '1.2rem', color: '#b08d6e' }}>Bianco Admin</h2>
        {menu.map(m => (
          <a
            key={m.key}
            onClick={() => setPage(m.key)}
            style={{ display: 'block', padding: '.7rem 1.5rem', color: page === m.key ? '#fff' : '#ccc', background: page === m.key ? '#333' : 'transparent', textDecoration: 'none', fontSize: '.95rem', cursor: 'pointer' }}
          >
            {m.label}
          </a>
        ))}
        <div style={{ marginTop: '2rem', borderTop: '1px solid #444', paddingTop: '1rem' }}>
          <a onClick={logout} style={{ display: 'block', padding: '.7rem 1.5rem', color: '#ccc', textDecoration: 'none', cursor: 'pointer' }}>Deconnexion</a>
          <a href="/" style={{ display: 'block', padding: '.7rem 1.5rem', color: '#888', textDecoration: 'none', fontSize: '.85rem' }}>Retour au site</a>
        </div>
      </nav>
      <div style={{ flex: 1, padding: '2rem 3rem', background: '#f5f5f5' }}>
        {renderPage()}
      </div>
    </div>
  );
};

// ============================================================
// Styles
// ============================================================
const styles: Record<string, React.CSSProperties> = {
  title: { fontSize: '1.8rem', marginBottom: '1.5rem', color: '#222' },
  card: { background: '#fff', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,.06)', marginBottom: '1.5rem' },
  btn: { display: 'inline-block', padding: '.6rem 1.2rem', background: '#b08d6e', color: '#fff', border: 'none', borderRadius: 8, fontSize: '.9rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none' },
  btnSm: { padding: '.4rem .8rem', fontSize: '.85rem' },
  btnDanger: { background: '#e74c3c' },
  success: { background: '#d4edda', color: '#155724', padding: '.8rem 1.2rem', borderRadius: 8, marginBottom: '1rem' },
  label: { display: 'block', fontWeight: 600, marginBottom: '.3rem', marginTop: '1rem', color: '#555', fontSize: '.9rem' },
  input: { width: '100%', padding: '.7rem 1rem', border: '1px solid #ddd', borderRadius: 8, fontSize: '.95rem', boxSizing: 'border-box' as const, fontFamily: 'inherit' },
  th: { padding: '.8rem', textAlign: 'left' as const, borderBottom: '1px solid #eee', fontWeight: 600, color: '#666', fontSize: '.85rem', textTransform: 'uppercase' as const },
  td: { padding: '.8rem', textAlign: 'left' as const, borderBottom: '1px solid #eee' },
};

export default AdminPage;
