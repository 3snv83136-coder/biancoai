import React, { useState, useEffect, useCallback, useRef } from 'react';

const API = '/api';

function getToken(): string | null {
  return localStorage.getItem('admin_token');
}

function authHeaders(): Record<string, string> {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}

async function api(path: string, options: RequestInit = {}) {
  const res = await fetch(API + path, { ...options, headers: { ...authHeaders(), ...(options.headers as any) } });
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
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(API + '/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('admin_token', data.token);
        onLogin();
      } else {
        setError(data.error || 'Erreur de connexion (code ' + res.status + ')');
      }
    } catch (err: any) {
      setError('Erreur reseau : ' + (err?.message || 'impossible de joindre le serveur'));
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '3rem', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,.1)', width: '100%', maxWidth: 400 }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem', color: '#222' }}>Bianco Admin</h1>
        {error && <p style={{ color: '#e74c3c', textAlign: 'center', marginBottom: '1rem', fontSize: '.9rem' }}>{error}</p>}
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Code d'acces"
            required
            autoFocus
            style={{ width: '100%', padding: '.8rem 3rem .8rem 1rem', border: '1px solid #ddd', borderRadius: 8, fontSize: '1rem', boxSizing: 'border-box' }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(v => !v)}
            style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#888', padding: '0.3rem' }}
            tabIndex={-1}
          >
            {showPassword ? '🙈' : '👁'}
          </button>
        </div>
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
// Analytics / Visites
// ============================================================
type TimeFilter = 'today' | 'week' | 'month';

const AnalyticsPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState<TimeFilter>('week');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api('/analytics').then(d => { setData(d); setLoading(false); });
  }, []);

  const getCount = () => {
    if (!data) return 0;
    if (filter === 'today') return data.today;
    if (filter === 'week') return data.week;
    return data.month;
  };

  const getDaily = (): { date: string; count: number }[] => {
    if (!data?.daily) return [];
    if (filter === 'today') return data.daily.slice(-1);
    if (filter === 'week') return data.daily.slice(-7);
    return data.daily;
  };

  const daily = getDaily();
  const maxVal = Math.max(...daily.map(d => d.count), 1);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
  };

  return (
    <div>
      <h1 style={styles.title}>Visites</h1>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.5rem' }}>
        {([['today', "Aujourd'hui"], ['week', '7 jours'], ['month', '30 jours']] as [TimeFilter, string][]).map(([k, label]) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            style={{
              padding: '.5rem 1.2rem',
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              fontWeight: filter === k ? 700 : 400,
              background: filter === k ? '#b08d6e' : '#e0e0e0',
              color: filter === k ? '#fff' : '#555',
              fontSize: '.9rem',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: '#888' }}>Chargement...</p>
      ) : (
        <>
          {/* Summary cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <StatCard number={data?.today ?? 0} label="Aujourd'hui" highlight={filter === 'today'} />
            <StatCard number={data?.week ?? 0} label="7 jours" highlight={filter === 'week'} />
            <StatCard number={data?.month ?? 0} label="30 jours" highlight={filter === 'month'} />
            <StatCard number={data?.total ?? 0} label="Total" />
          </div>

          {/* Bar chart */}
          <div style={styles.card}>
            <h3 style={{ marginBottom: '1rem', color: '#444', fontSize: '1rem', fontWeight: 600 }}>
              Visites — {filter === 'today' ? "aujourd'hui" : filter === 'week' ? '7 derniers jours' : '30 derniers jours'}
            </h3>
            {daily.length === 0 ? (
              <p style={{ color: '#aaa' }}>Aucune donnee</p>
            ) : (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: 180, overflowX: 'auto' }}>
                {daily.map(d => (
                  <div key={d.date} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 0 28px', minWidth: 28 }}>
                    <span style={{ fontSize: '.7rem', color: '#888', marginBottom: 2 }}>{d.count > 0 ? d.count : ''}</span>
                    <div
                      style={{
                        width: '100%',
                        background: '#b08d6e',
                        borderRadius: '4px 4px 0 0',
                        height: Math.max(4, Math.round((d.count / maxVal) * 140)),
                        opacity: d.count === 0 ? 0.2 : 1,
                      }}
                    />
                    <span style={{ fontSize: '.65rem', color: '#888', marginTop: 4, transform: 'rotate(-40deg)', transformOrigin: 'top left', whiteSpace: 'nowrap' }}>{formatDate(d.date)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Top pages */}
          {data?.topPages?.length > 0 && (
            <div style={styles.card}>
              <h3 style={{ marginBottom: '1rem', color: '#444', fontSize: '1rem', fontWeight: 600 }}>Pages les plus visitees (30 jours)</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={styles.th}>Page</th>
                    <th style={{ ...styles.th, textAlign: 'right' as const }}>Visites</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topPages.map((p: any) => (
                    <tr key={p.path}>
                      <td style={styles.td}><code style={{ fontSize: '.85rem' }}>{p.path}</code></td>
                      <td style={{ ...styles.td, textAlign: 'right' as const, fontWeight: 700, color: '#b08d6e' }}>{p.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// ============================================================
// Newsletter
// ============================================================
const NewsletterPage: React.FC = () => {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [addEmail, setAddEmail] = useState('');
  const [addName, setAddName] = useState('');
  const [addMsg, setAddMsg] = useState('');
  const [subject, setSubject] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [sendMsg, setSendMsg] = useState('');
  const [sending, setSending] = useState(false);
  const [genTopic, setGenTopic] = useState('');
  const [genTone, setGenTone] = useState('chaleureux');
  const [generating, setGenerating] = useState(false);
  const [tab, setTab] = useState<'list' | 'compose'>('list');

  const loadSubscribers = useCallback(() => {
    api('/newsletter').then(d => setSubscribers(d?.subscribers || []));
  }, []);

  useEffect(() => { loadSubscribers(); }, [loadSubscribers]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await api('/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: addEmail, name: addName }),
    });
    if (res.ok) {
      setAddMsg('Abonne ajoute !');
      setAddEmail(''); setAddName('');
      loadSubscribers();
    } else {
      setAddMsg(res.error || 'Erreur');
    }
    setTimeout(() => setAddMsg(''), 3000);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cet abonne ?')) return;
    await api('/newsletter?id=' + encodeURIComponent(id), { method: 'DELETE' });
    loadSubscribers();
  };

  const handleGenerate = async () => {
    if (!genTopic.trim()) return;
    setGenerating(true);
    setSendMsg('');
    const res = await api('/newsletter-generate', {
      method: 'POST',
      body: JSON.stringify({ topic: genTopic, tone: genTone }),
    });
    if (res.ok) {
      setHtmlContent(res.html || '');
      setSubject(res.subject || '');
      setTab('compose');
    } else {
      setSendMsg(res.error || 'Erreur generation');
    }
    setGenerating(false);
  };

  const handleSend = async () => {
    if (!subject.trim() || !htmlContent.trim()) return;
    if (!confirm(`Envoyer a ${subscribers.filter(s => s.active).length} abonne(s) ?`)) return;
    setSending(true);
    setSendMsg('');
    const res = await api('/newsletter-send', {
      method: 'POST',
      body: JSON.stringify({ subject, html: htmlContent }),
    });
    if (res.ok) {
      setSendMsg(`Envoye ! ${res.sent} succes, ${res.failed} echecs.`);
    } else {
      setSendMsg(res.error || 'Erreur envoi');
    }
    setSending(false);
  };

  const activeCount = subscribers.filter(s => s.active).length;

  return (
    <div>
      <h1 style={styles.title}>Newsletter</h1>

      {/* Sub tabs */}
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.5rem' }}>
        {([['list', `Abonnes (${subscribers.length})`], ['compose', 'Composer & Envoyer']] as [string, string][]).map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k as any)}
            style={{
              padding: '.5rem 1.2rem',
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              fontWeight: tab === k ? 700 : 400,
              background: tab === k ? '#b08d6e' : '#e0e0e0',
              color: tab === k ? '#fff' : '#555',
              fontSize: '.9rem',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'list' && (
        <>
          {/* Add subscriber */}
          <div style={styles.card}>
            <h3 style={{ marginBottom: '1rem', color: '#444', fontWeight: 600 }}>Ajouter un abonne</h3>
            <form onSubmit={handleAdd} style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <div style={{ flex: '1 1 200px' }}>
                <label style={styles.label}>Email *</label>
                <input style={styles.input} type="email" value={addEmail} onChange={e => setAddEmail(e.target.value)} required placeholder="email@exemple.fr" />
              </div>
              <div style={{ flex: '1 1 150px' }}>
                <label style={styles.label}>Prenom</label>
                <input style={styles.input} value={addName} onChange={e => setAddName(e.target.value)} placeholder="Optionnel" />
              </div>
              <button type="submit" style={{ ...styles.btn, alignSelf: 'flex-end' }}>Ajouter</button>
            </form>
            {addMsg && <p style={{ marginTop: '.5rem', color: '#155724' }}>{addMsg}</p>}
          </div>

          {/* List */}
          <div style={styles.card}>
            <p style={{ marginBottom: '1rem', color: '#888', fontSize: '.9rem' }}>{activeCount} abonne(s) actif(s)</p>
            {subscribers.length === 0 ? (
              <p style={{ color: '#aaa' }}>Aucun abonne.</p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Email', 'Prenom', 'Date inscription', 'Actions'].map(h => <th key={h} style={styles.th}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map(s => (
                    <tr key={s.id}>
                      <td style={styles.td}>{s.email}</td>
                      <td style={styles.td}>{s.name || '—'}</td>
                      <td style={styles.td}>{new Date(s.createdAt).toLocaleDateString('fr-FR')}</td>
                      <td style={styles.td}>
                        <button onClick={() => handleDelete(s.id)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger }}>Supprimer</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}

      {tab === 'compose' && (
        <>
          {/* AI generation */}
          <div style={styles.card}>
            <h3 style={{ marginBottom: '1rem', color: '#444', fontWeight: 600 }}>Generer avec l'IA</h3>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <div style={{ flex: '2 1 250px' }}>
                <label style={styles.label}>Sujet / theme</label>
                <input
                  style={styles.input}
                  value={genTopic}
                  onChange={e => setGenTopic(e.target.value)}
                  placeholder="Ex: soins d'ete, promo rentre, head spa..."
                />
              </div>
              <div style={{ flex: '1 1 150px' }}>
                <label style={styles.label}>Ton</label>
                <select style={styles.input} value={genTone} onChange={e => setGenTone(e.target.value)}>
                  <option value="chaleureux">Chaleureux</option>
                  <option value="professionnel">Professionnel</option>
                  <option value="promotionnel">Promotionnel</option>
                  <option value="informatif">Informatif</option>
                </select>
              </div>
              <button onClick={handleGenerate} disabled={generating || !genTopic.trim()} style={{ ...styles.btn, alignSelf: 'flex-end' }}>
                {generating ? 'Generation...' : 'Generer'}
              </button>
            </div>
          </div>

          {/* Compose form */}
          <div style={styles.card}>
            <h3 style={{ marginBottom: '1rem', color: '#444', fontWeight: 600 }}>Contenu de la newsletter</h3>
            {sendMsg && (
              <div style={{ ...styles.success, marginBottom: '1rem', background: sendMsg.includes('chec') ? '#fdecea' : '#d4edda', color: sendMsg.includes('chec') ? '#c0392b' : '#155724' }}>
                {sendMsg}
              </div>
            )}
            <label style={styles.label}>Sujet de l'email</label>
            <input style={styles.input} value={subject} onChange={e => setSubject(e.target.value)} placeholder="Sujet de l'email" />

            <label style={styles.label}>Contenu HTML</label>
            <textarea
              style={{ ...styles.input, minHeight: 300, fontFamily: 'monospace', fontSize: '.85rem' }}
              value={htmlContent}
              onChange={e => setHtmlContent(e.target.value)}
              placeholder="<p>Contenu de votre newsletter...</p>"
            />

            {htmlContent && (
              <>
                <label style={{ ...styles.label, marginTop: '1rem' }}>Apercu</label>
                <div
                  style={{ border: '1px solid #eee', borderRadius: 8, padding: '1rem', background: '#fafafa', marginBottom: '1rem' }}
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </>
            )}

            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button
                onClick={handleSend}
                disabled={sending || !subject.trim() || !htmlContent.trim() || activeCount === 0}
                style={styles.btn}
              >
                {sending ? 'Envoi...' : `Envoyer a ${activeCount} abonne(s)`}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ============================================================
// Pages Editor
// ============================================================
const PagesEditor: React.FC = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState<any | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  const load = useCallback(() => {
    api('/pages').then(d => setPages(d?.pages || []));
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = pages.filter(p =>
    p.url?.toLowerCase().includes(search.toLowerCase()) ||
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = async () => {
    setSaving(true);
    const updated = pages.map(p => p.url === editing.url ? editing : p);
    await api('/pages', { method: 'PUT', body: JSON.stringify({ pages: updated }) });
    setPages(updated);
    setMsg('Page sauvegardee !');
    setSaving(false);
    setTimeout(() => setMsg(''), 3000);
  };

  const handleAdd = () => {
    const newPage = { url: '/nouvelle-page', title: 'Nouvelle page', keywords: [], description: '' };
    setPages(p => [...p, newPage]);
    setEditing(newPage);
  };

  const updateField = (field: string, value: string) => {
    setEditing((e: any) => ({ ...e, [field]: field === 'keywords' ? value.split(',').map((k: string) => k.trim()).filter(Boolean) : value }));
  };

  if (editing) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <button onClick={() => { setEditing(null); load(); }} style={{ ...styles.btn, background: '#888' }}>← Retour</button>
          <h1 style={{ ...styles.title, marginBottom: 0, fontSize: '1.4rem' }}>Editer : {editing.url}</h1>
        </div>
        {msg && <div style={styles.success}>{msg}</div>}
        <div style={styles.card}>
          <label style={styles.label}>URL</label>
          <input style={styles.input} value={editing.url} onChange={e => updateField('url', e.target.value)} />

          <label style={styles.label}>Titre</label>
          <input style={styles.input} value={editing.title || ''} onChange={e => updateField('title', e.target.value)} />

          <label style={styles.label}>Description</label>
          <textarea style={{ ...styles.input, minHeight: 80 }} value={editing.description || ''} onChange={e => updateField('description', e.target.value)} />

          <label style={styles.label}>Mots-cles (virgules)</label>
          <input style={styles.input} value={(editing.keywords || []).join(', ')} onChange={e => updateField('keywords', e.target.value)} />

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <button onClick={handleSave} disabled={saving} style={styles.btn}>{saving ? 'Enregistrement...' : 'Enregistrer'}</button>
            <button onClick={() => { setEditing(null); load(); }} style={{ ...styles.btn, background: '#888' }}>Annuler</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <h1 style={{ ...styles.title, marginBottom: 0 }}>Pages du site</h1>
        <button onClick={handleAdd} style={styles.btn}>+ Ajouter</button>
      </div>
      <p style={{ color: '#888', marginBottom: '1rem', fontSize: '.9rem' }}>
        {pages.length} pages enregistrees — utilisees pour le maillage interne du blog
      </p>

      <input
        style={{ ...styles.input, marginBottom: '1rem', maxWidth: 400 }}
        placeholder="Rechercher par URL ou titre..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div style={styles.card}>
        {filtered.length === 0 ? (
          <p style={{ color: '#aaa' }}>Aucune page trouvee.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>{['URL', 'Titre', 'Mots-cles', 'Actions'].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.url}>
                  <td style={styles.td}><code style={{ fontSize: '.85rem' }}>{p.url}</code></td>
                  <td style={styles.td}>{p.title}</td>
                  <td style={{ ...styles.td, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>
                    {(p.keywords || []).join(', ')}
                  </td>
                  <td style={styles.td}>
                    <button onClick={() => setEditing({ ...p })} style={{ ...styles.btn, ...styles.btnSm }}>Modifier</button>
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
// Dashboard
// ============================================================
const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({ posts: 0, sections: 0, items: 0, subscribers: 0, visits: 0 });

  useEffect(() => {
    Promise.all([api('/posts'), api('/prices'), api('/newsletter'), api('/analytics')]).then(
      ([postsData, pricesData, newsletterData, analyticsData]) => {
        setStats({
          posts: postsData?.posts?.length || 0,
          sections: pricesData?.sections?.length || 0,
          items: (pricesData?.sections || []).reduce((sum: number, s: any) => sum + (s.items?.length || 0), 0),
          subscribers: newsletterData?.subscribers?.filter((s: any) => s.active)?.length || 0,
          visits: analyticsData?.week || 0,
        });
      }
    );
  }, []);

  return (
    <div>
      <h1 style={styles.title}>Tableau de bord</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <StatCard number={stats.visits} label="Visites (7j)" />
        <StatCard number={stats.posts} label="Articles blog" />
        <StatCard number={stats.sections} label="Sections tarifs" />
        <StatCard number={stats.items} label="Prestations" />
        <StatCard number={stats.subscribers} label="Abonnes newsletter" />
      </div>
      <div style={styles.card}>
        <p style={{ color: '#888', fontSize: '.9rem', lineHeight: 1.6 }}>
          Bienvenue dans l'administration de <strong>Bianco Esthetique</strong>.<br />
          Utilisez le menu pour gerer les articles, les tarifs, les abonnes newsletter et les pages du site.
        </p>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ number: number; label: string; highlight?: boolean }> = ({ number, label, highlight }) => (
  <div style={{
    background: highlight ? '#b08d6e' : '#fff',
    padding: '1.5rem',
    borderRadius: 12,
    boxShadow: '0 2px 12px rgba(0,0,0,.06)',
    textAlign: 'center',
    color: highlight ? '#fff' : 'inherit',
  }}>
    <div style={{ fontSize: '2rem', fontWeight: 700, color: highlight ? '#fff' : '#b08d6e' }}>{number}</div>
    <div style={{ fontSize: '.85rem', color: highlight ? 'rgba(255,255,255,.8)' : '#888', marginTop: '.3rem' }}>{label}</div>
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

          <label style={styles.label}>Nouveau code d'acces (vide = inchange)</label>
          <input style={styles.input} type="password" value={form.new_password} onChange={e => setForm(f => ({ ...f, new_password: e.target.value }))} placeholder="Nouveau code" />

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
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!logged) return <LoginForm onLogin={() => setLogged(true)} />;

  const menu = [
    { key: 'dashboard', label: 'Tableau de bord', icon: '◈' },
    { key: 'analytics', label: 'Visites', icon: '◉' },
    { key: 'newsletter', label: 'Newsletter', icon: '✉' },
    { key: 'posts', label: 'Articles', icon: '✦' },
    { key: 'post_new', label: 'Nouvel article', icon: '+' },
    { key: 'prices', label: 'Tarifs', icon: '€' },
    { key: 'pages', label: 'Pages', icon: '⊞' },
    { key: 'settings', label: 'Parametres', icon: '⚙' },
  ];

  const logout = () => {
    localStorage.removeItem('admin_token');
    setLogged(false);
  };

  const navigate = (key: string) => {
    setPage(key);
    setMobileOpen(false);
  };

  const renderPage = () => {
    switch (page) {
      case 'dashboard': return <Dashboard />;
      case 'analytics': return <AnalyticsPage />;
      case 'newsletter': return <NewsletterPage />;
      case 'posts': return <PostsList onEdit={(id) => { setEditId(id); setPage('post_edit'); }} onNew={() => setPage('post_new')} />;
      case 'post_new': return <PostForm onBack={() => setPage('posts')} />;
      case 'post_edit': return <PostForm postId={editId} onBack={() => setPage('posts')} />;
      case 'prices': return <PricesPage />;
      case 'pages': return <PagesEditor />;
      case 'settings': return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      {/* Sidebar */}
      <nav style={{ width: 220, background: '#1a1a1a', color: '#fff', padding: '1.5rem 0', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ padding: '0 1.2rem', marginBottom: '2rem', fontSize: '1.1rem', color: '#b08d6e', letterSpacing: '.05em' }}>Bianco Admin</h2>
        <div style={{ flex: 1 }}>
          {menu.map(m => (
            <a
              key={m.key}
              onClick={() => navigate(m.key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.6rem',
                padding: '.65rem 1.2rem',
                color: page === m.key || (page === 'post_edit' && m.key === 'posts') ? '#fff' : '#aaa',
                background: page === m.key || (page === 'post_edit' && m.key === 'posts') ? 'rgba(176,141,110,.2)' : 'transparent',
                borderLeft: page === m.key ? '3px solid #b08d6e' : '3px solid transparent',
                textDecoration: 'none',
                fontSize: '.9rem',
                cursor: 'pointer',
                transition: 'all .15s',
              }}
            >
              <span style={{ width: 16, textAlign: 'center', opacity: .7 }}>{m.icon}</span>
              {m.label}
            </a>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #333', paddingTop: '1rem' }}>
          <a onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.65rem 1.2rem', color: '#aaa', textDecoration: 'none', cursor: 'pointer', fontSize: '.9rem' }}>
            <span style={{ width: 16, textAlign: 'center', opacity: .7 }}>⏎</span>Deconnexion
          </a>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.65rem 1.2rem', color: '#666', textDecoration: 'none', fontSize: '.85rem' }}>
            <span style={{ width: 16, textAlign: 'center', opacity: .7 }}>↗</span>Voir le site
          </a>
        </div>
      </nav>

      {/* Main content */}
      <div style={{ flex: 1, padding: '2rem 2.5rem', background: '#f5f5f5', overflowY: 'auto' }}>
        {renderPage()}
      </div>
    </div>
  );
};

// ============================================================
// Styles
// ============================================================
const styles: Record<string, React.CSSProperties> = {
  title: { fontSize: '1.8rem', marginBottom: '1.5rem', color: '#222', fontWeight: 700 },
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
