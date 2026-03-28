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

  const avgPerDay = filter === 'today' ? (data?.today ?? 0) : filter === 'week' ? Math.round((data?.week ?? 0) / 7) : Math.round((data?.month ?? 0) / 30);

  return (
    <div>
      <h1 style={styles.title}>Visites du site</h1>

      {/* Status indicator */}
      <div style={{ ...styles.card, display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', padding: '1rem 1.5rem' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: data ? '#2ecc71' : '#e74c3c', boxShadow: data ? '0 0 8px #2ecc71' : '0 0 8px #e74c3c' }} />
        <span style={{ fontSize: '.9rem', color: '#555' }}>
          {loading ? 'Connexion au serveur...' : data ? 'Tracking actif — les visites sont enregistrees automatiquement' : 'Pas de donnees — verifiez que le site est en ligne'}
        </span>
      </div>

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
        <p style={{ color: '#888' }}>Chargement des statistiques...</p>
      ) : !data ? (
        <div style={styles.card}>
          <p style={{ color: '#e74c3c' }}>Impossible de charger les statistiques. L'API analytics est peut-etre inactive.</p>
          <p style={{ color: '#888', fontSize: '.85rem', marginTop: '.5rem' }}>
            Le tracking est integre dans chaque page du site. Les visites sont enregistrees automatiquement des que le site est en ligne sur Vercel.
          </p>
        </div>
      ) : (
        <>
          {/* Summary cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <StatCard number={data.today ?? 0} label="Aujourd'hui" highlight={filter === 'today'} />
            <StatCard number={data.week ?? 0} label="7 jours" highlight={filter === 'week'} />
            <StatCard number={data.month ?? 0} label="30 jours" highlight={filter === 'month'} />
            <StatCard number={avgPerDay} label="Moy. / jour" />
            <StatCard number={data.total ?? 0} label="Total cumule" />
          </div>

          {/* Bar chart */}
          <div style={styles.card}>
            <h3 style={{ marginBottom: '1rem', color: '#444', fontSize: '1rem', fontWeight: 600 }}>
              Visites — {filter === 'today' ? "aujourd'hui" : filter === 'week' ? '7 derniers jours' : '30 derniers jours'}
            </h3>
            {daily.length === 0 ? (
              <p style={{ color: '#aaa' }}>Aucune visite enregistree sur cette periode</p>
            ) : (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: 180, overflowX: 'auto' }}>
                {daily.map(d => (
                  <div key={d.date} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 0 28px', minWidth: 28 }}>
                    <span style={{ fontSize: '.7rem', color: '#888', marginBottom: 2 }}>{d.count > 0 ? d.count : ''}</span>
                    <div
                      style={{
                        width: '100%',
                        background: d.count > 0 ? '#b08d6e' : '#e0e0e0',
                        borderRadius: '4px 4px 0 0',
                        height: Math.max(4, Math.round((d.count / maxVal) * 140)),
                      }}
                    />
                    <span style={{ fontSize: '.65rem', color: '#888', marginTop: 4, transform: 'rotate(-40deg)', transformOrigin: 'top left', whiteSpace: 'nowrap' }}>{formatDate(d.date)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Top pages */}
          {data.topPages?.length > 0 && (
            <div style={styles.card}>
              <h3 style={{ marginBottom: '1rem', color: '#444', fontSize: '1rem', fontWeight: 600 }}>Pages les plus visitees (30 jours)</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={styles.th}>Page</th>
                    <th style={{ ...styles.th, textAlign: 'right' as const }}>Visites</th>
                    <th style={{ ...styles.th, textAlign: 'right' as const }}>% du trafic</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topPages.map((p: any) => (
                    <tr key={p.path}>
                      <td style={styles.td}><code style={{ fontSize: '.85rem' }}>{p.path}</code></td>
                      <td style={{ ...styles.td, textAlign: 'right' as const, fontWeight: 700, color: '#b08d6e' }}>{p.count}</td>
                      <td style={{ ...styles.td, textAlign: 'right' as const, color: '#999' }}>{data.month > 0 ? Math.round((p.count / data.month) * 100) : 0}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div style={{ ...styles.card, background: '#fafafa', borderLeft: '3px solid #b08d6e' }}>
            <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.6 }}>
              <strong>Comment ca marche :</strong> chaque page du site envoie automatiquement une visite au serveur quand un visiteur arrive.
              Les donnees sont stockees sur Vercel Blob et conservees (max 50 000 entrees). Le graphique montre les pages vues, pas les visiteurs uniques.
            </p>
          </div>
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

  const handleDelete = (url: string) => {
    if (!confirm('Supprimer cette page ?')) return;
    const updated = pages.filter(p => p.url !== url);
    setPages(updated);
    api('/pages', { method: 'PUT', body: JSON.stringify({ pages: updated }) });
  };

  const handleAdd = () => {
    const newPage = { url: '/nouvelle-page', title: 'Nouvelle page', keywords: [], description: '', meta_title: '', h1: '', subtitle: '', og_title: '', og_description: '' };
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

        {/* Maillage interne */}
        <div style={styles.card}>
          <h3 style={{ marginBottom: '1rem', color: '#444', fontWeight: 600 }}>Identite de la page</h3>
          <label style={styles.label}>URL</label>
          <input style={styles.input} value={editing.url} onChange={e => updateField('url', e.target.value)} />

          <label style={styles.label}>Titre (maillage interne)</label>
          <input style={styles.input} value={editing.title || ''} onChange={e => updateField('title', e.target.value)} />

          <label style={styles.label}>Mots-cles (virgules)</label>
          <input style={styles.input} value={(editing.keywords || []).join(', ')} onChange={e => updateField('keywords', e.target.value)} />
        </div>

        {/* Parametres texte SEO */}
        <div style={styles.card}>
          <h3 style={{ marginBottom: '1rem', color: '#444', fontWeight: 600 }}>Parametres texte & SEO</h3>

          <label style={styles.label}>Meta title <span style={{ fontWeight: 400, color: '#999' }}>(balise &lt;title&gt; — 60 car. max)</span></label>
          <input style={styles.input} value={editing.meta_title || ''} onChange={e => updateField('meta_title', e.target.value)} maxLength={70} placeholder={editing.title || 'Titre de la page'} />
          <div style={{ fontSize: '.75rem', color: (editing.meta_title || '').length > 60 ? '#e74c3c' : '#999', marginTop: 2 }}>{(editing.meta_title || '').length}/60</div>

          <label style={styles.label}>Meta description <span style={{ fontWeight: 400, color: '#999' }}>(160 car. max)</span></label>
          <textarea style={{ ...styles.input, minHeight: 70 }} value={editing.description || ''} onChange={e => updateField('description', e.target.value)} maxLength={165} placeholder="Description de la page pour Google" />
          <div style={{ fontSize: '.75rem', color: (editing.description || '').length > 160 ? '#e74c3c' : '#999', marginTop: 2 }}>{(editing.description || '').length}/160</div>

          <label style={styles.label}>H1 <span style={{ fontWeight: 400, color: '#999' }}>(titre principal visible)</span></label>
          <input style={styles.input} value={editing.h1 || ''} onChange={e => updateField('h1', e.target.value)} placeholder="Titre principal de la page" />

          <label style={styles.label}>Sous-titre / intro</label>
          <textarea style={{ ...styles.input, minHeight: 80 }} value={editing.subtitle || ''} onChange={e => updateField('subtitle', e.target.value)} placeholder="Paragraphe d'introduction sous le H1" />
        </div>

        {/* Open Graph */}
        <div style={styles.card}>
          <h3 style={{ marginBottom: '1rem', color: '#444', fontWeight: 600 }}>Reseaux sociaux (Open Graph)</h3>

          <label style={styles.label}>OG Title <span style={{ fontWeight: 400, color: '#999' }}>(partage Facebook/LinkedIn — vide = meta title)</span></label>
          <input style={styles.input} value={editing.og_title || ''} onChange={e => updateField('og_title', e.target.value)} placeholder={editing.meta_title || editing.title || ''} />

          <label style={styles.label}>OG Description <span style={{ fontWeight: 400, color: '#999' }}>(vide = meta description)</span></label>
          <textarea style={{ ...styles.input, minHeight: 70 }} value={editing.og_description || ''} onChange={e => updateField('og_description', e.target.value)} placeholder={editing.description || ''} />
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button onClick={handleSave} disabled={saving} style={styles.btn}>{saving ? 'Enregistrement...' : 'Enregistrer'}</button>
          <button onClick={() => { setEditing(null); load(); }} style={{ ...styles.btn, background: '#888' }}>Annuler</button>
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
        {pages.length} pages — maillage interne + parametres texte & SEO
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
              <tr>{['URL', 'Titre', 'Meta title', 'H1', 'Actions'].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.url}>
                  <td style={styles.td}><code style={{ fontSize: '.85rem' }}>{p.url}</code></td>
                  <td style={styles.td}>{p.title}</td>
                  <td style={{ ...styles.td, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const, color: p.meta_title ? '#222' : '#ccc' }}>
                    {p.meta_title || '—'}
                  </td>
                  <td style={{ ...styles.td, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const, color: p.h1 ? '#222' : '#ccc' }}>
                    {p.h1 || '—'}
                  </td>
                  <td style={styles.td}>
                    <button onClick={() => setEditing({ ...p })} style={{ ...styles.btn, ...styles.btnSm, marginRight: '.5rem' }}>Modifier</button>
                    <button onClick={() => handleDelete(p.url)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger }}>Supprimer</button>
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

      {posts.length === 0 ? (
        <div style={styles.card}><p>Aucun article pour le moment.</p></div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.2rem' }}>
          {posts.map(p => {
            const thumb = p.images?.[0];
            const thumbUrl = thumb?.url || (thumb?.file ? `/admin/uploads/blog/${thumb.file}` : null);
            return (
              <div key={p.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,.06)', overflow: 'hidden' }}>
                {/* Thumbnail */}
                <div style={{ height: 160, background: '#eee', position: 'relative' }}>
                  {thumbUrl ? (
                    <img src={thumbUrl} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: '.9rem' }}>Aucune photo</div>
                  )}
                  <div style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,.6)', color: '#fff', fontSize: '.75rem', padding: '2px 8px', borderRadius: 12 }}>
                    {(p.images || []).length} photo{(p.images || []).length !== 1 ? 's' : ''}
                  </div>
                </div>
                {/* Info */}
                <div style={{ padding: '1rem 1.2rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '.3rem', color: '#222' }}>{p.title}</h3>
                  <div style={{ fontSize: '.8rem', color: '#999', marginBottom: '.6rem' }}>
                    {p.date} {(p.tags || []).length > 0 && <span>— {(p.tags || []).join(', ')}</span>}
                  </div>
                  {p.excerpt && <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.5, marginBottom: '.8rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>{p.excerpt}</p>}
                  <div style={{ display: 'flex', gap: '.5rem' }}>
                    <button onClick={() => onEdit(p.id)} style={{ ...styles.btn, ...styles.btnSm, flex: 1 }}>Modifier</button>
                    <button onClick={() => handleDelete(p.id)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger }}>Suppr.</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ============================================================
// Post Form
// ============================================================
const PostForm: React.FC<{ postId?: string; onBack: () => void }> = ({ postId, onBack }) => {
  const [form, setForm] = useState({ title: '', excerpt: '', content: '', tags: '', meta_desc: '', date: new Date().toISOString().slice(0, 10), images: [] as any[], faq: [] as { q: string; a: string }[] });
  const [saving, setSaving] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(false);
  const replaceRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (postId) {
      api('/posts?id=' + encodeURIComponent(postId)).then(p => {
        if (p && !p.error) {
          setForm({ ...p, tags: (p.tags || []).join(', '), images: p.images || [], faq: p.faq || [] });
        }
      });
    }
  }, [postId]);

  const uploadFile = async (file: File): Promise<{ file: string; url: string } | null> => {
    const fname = 'img-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6) + '.' + (file.name.split('.').pop() || 'jpg');
    const token = getToken();
    const uploadRes = await fetch(API + '/upload?filename=' + encodeURIComponent(fname), {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: file,
    });
    const uploadData = await uploadRes.json();
    return uploadData.url ? { file: fname, url: uploadData.url } : null;
  };

  // Auto-generate excerpt + meta_desc from content if empty
  const autoFill = () => {
    const plainText = form.content.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (!form.excerpt && plainText) setForm(f => ({ ...f, excerpt: plainText.slice(0, 200) + (plainText.length > 200 ? '...' : '') }));
    if (!form.meta_desc && plainText) setForm(f => ({ ...f, meta_desc: plainText.slice(0, 155) }));
    if (!form.tags && form.title) {
      const autoTags = form.title.toLowerCase().replace(/[^a-zàâéèêëïîôùûüÿç\s]/g, '').split(/\s+/).filter(w => w.length > 3).slice(0, 4).join(', ');
      setForm(f => ({ ...f, tags: autoTags }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    let images = [...form.images];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const result = await uploadFile(files[i]);
        if (result) images.push({ ...result, caption: '' });
      }
    }

    const body = { ...form, images, faq: form.faq.filter(f => f.q.trim() && f.a.trim()) };
    if (postId) {
      await api('/posts?id=' + encodeURIComponent(postId), { method: 'PUT', body: JSON.stringify(body) });
    } else {
      await api('/posts', { method: 'POST', body: JSON.stringify(body) });
    }

    setSaving(false);
    onBack();
  };

  const removeImage = (idx: number) => setForm(f => ({ ...f, images: f.images.filter((_, i) => i !== idx) }));
  const updateCaption = (idx: number, caption: string) => setForm(f => ({ ...f, images: f.images.map((img, i) => i === idx ? { ...img, caption } : img) }));
  const moveImage = (idx: number, dir: -1 | 1) => {
    const target = idx + dir;
    setForm(f => { const imgs = [...f.images]; if (target < 0 || target >= imgs.length) return f; [imgs[idx], imgs[target]] = [imgs[target], imgs[idx]]; return { ...f, images: imgs }; });
  };
  const replaceImage = async (idx: number, file: File) => {
    setUploading(true);
    const result = await uploadFile(file);
    if (result) setForm(f => ({ ...f, images: f.images.map((img, i) => i === idx ? { ...result, caption: img.caption || '' } : img) }));
    setUploading(false);
  };

  // FAQ helpers
  const addFaq = () => setForm(f => ({ ...f, faq: [...f.faq, { q: '', a: '' }] }));
  const updateFaq = (idx: number, field: 'q' | 'a', val: string) => setForm(f => ({ ...f, faq: f.faq.map((fq, i) => i === idx ? { ...fq, [field]: val } : fq) }));
  const removeFaq = (idx: number) => setForm(f => ({ ...f, faq: f.faq.filter((_, i) => i !== idx) }));

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button type="button" onClick={onBack} style={{ ...styles.btn, background: '#888' }}>← Retour</button>
        <h1 style={{ ...styles.title, marginBottom: 0, flex: 1 }}>{postId ? "Modifier l'article" : 'Nouvel article'}</h1>
        <button type="button" onClick={() => setPreview(v => !v)} style={{ ...styles.btn, background: preview ? '#b08d6e' : '#3498db' }}>{preview ? 'Editer' : 'Apercu'}</button>
      </div>

      {/* Info box */}
      {!postId && (
        <div style={{ ...styles.card, background: '#f0f7ff', borderLeft: '3px solid #3498db', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '.85rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
            <strong>Workflow simplifie :</strong> Ajoutez une photo, collez votre texte (ou dictez-le), puis cliquez Publier.
            Le JSON-LD, le sitemap et la page blog sont generes automatiquement. Remplissez la FAQ pour un meilleur SEO.
          </p>
        </div>
      )}

      {preview ? (
        /* ===== APERCU ===== */
        <div style={styles.card}>
          <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '.75rem', fontWeight: 700, color: '#b08d6e', textTransform: 'uppercase', letterSpacing: '.1em' }}>{form.date} {form.tags && '— ' + form.tags}</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#222', margin: '.5rem 0' }}>{form.title || 'Titre de l\'article'}</h2>
            <p style={{ color: '#888', fontSize: '.9rem' }}>{form.excerpt || 'Extrait...'}</p>
          </div>
          {form.images[0] && <img src={form.images[0].url || ''} alt="" style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 12, marginBottom: '1rem' }} />}
          <div dangerouslySetInnerHTML={{ __html: form.content || '<p style="color:#aaa">Contenu de l\'article...</p>' }} style={{ lineHeight: 1.8, color: '#444' }} />
          {form.faq.length > 0 && (
            <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
              <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>FAQ</h3>
              {form.faq.filter(f => f.q && f.a).map((fq, i) => (
                <div key={i} style={{ marginBottom: '.8rem' }}>
                  <p style={{ fontWeight: 600, color: '#222' }}>{fq.q}</p>
                  <p style={{ color: '#666', fontSize: '.9rem' }}>{fq.a}</p>
                </div>
              ))}
            </div>
          )}
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f5f5f5', borderRadius: 8, fontSize: '.8rem', color: '#888' }}>
            <strong>JSON-LD auto-genere :</strong> BlogPosting + BreadcrumbList{form.faq.length > 0 ? ' + FAQPage' : ''} — Sitemap mis a jour automatiquement
          </div>
        </div>
      ) : (
        /* ===== FORMULAIRE ===== */
        <form onSubmit={handleSubmit}>
          {/* Photo en premier */}
          <div style={styles.card}>
            <h3 style={{ marginBottom: '.5rem', color: '#444', fontWeight: 600 }}>
              1. Photo{form.images.length > 1 ? 's' : ''} <span style={{ fontWeight: 400, color: '#999' }}>({form.images.length})</span>
            </h3>
            {uploading && <p style={{ color: '#b08d6e', fontSize: '.9rem' }}>Upload en cours...</p>}

            {form.images.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '.5rem' }}>
                {form.images.map((img: any, i: number) => {
                  const src = img.url || `/admin/uploads/blog/${img.file}`;
                  return (
                    <div key={i} style={{ background: '#fafafa', borderRadius: 10, border: '1px solid #eee', overflow: 'hidden' }}>
                      <div style={{ position: 'relative', height: 130 }}>
                        <img src={src} alt={img.caption || ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', top: 6, left: 6, background: 'rgba(0,0,0,.6)', color: '#fff', fontSize: '.7rem', padding: '2px 8px', borderRadius: 10 }}>{i + 1}/{form.images.length}</div>
                      </div>
                      <div style={{ padding: '.5rem .6rem' }}>
                        <input style={{ ...styles.input, fontSize: '.8rem', padding: '.3rem .5rem', marginBottom: '.4rem' }} value={img.caption || ''} onChange={e => updateCaption(i, e.target.value)} placeholder="Legende..." />
                        <div style={{ display: 'flex', gap: '.25rem', flexWrap: 'wrap' }}>
                          <button type="button" onClick={() => moveImage(i, -1)} disabled={i === 0} style={{ ...styles.btn, ...styles.btnSm, padding: '.2rem .4rem', fontSize: '.7rem', opacity: i === 0 ? .3 : 1 }}>←</button>
                          <button type="button" onClick={() => moveImage(i, 1)} disabled={i === form.images.length - 1} style={{ ...styles.btn, ...styles.btnSm, padding: '.2rem .4rem', fontSize: '.7rem', opacity: i === form.images.length - 1 ? .3 : 1 }}>→</button>
                          <button type="button" onClick={() => replaceRefs.current[i]?.click()} style={{ ...styles.btn, ...styles.btnSm, padding: '.2rem .4rem', fontSize: '.7rem', background: '#3498db' }}>Remplacer</button>
                          <input ref={el => { replaceRefs.current[i] = el; }} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => { if (e.target.files?.[0]) replaceImage(i, e.target.files[0]); }} />
                          <button type="button" onClick={() => removeImage(i)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger, padding: '.2rem .4rem', fontSize: '.7rem', marginLeft: 'auto' }}>X</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}

            <div style={{ marginTop: '1rem', padding: '1.5rem', border: '2px dashed #ccc', borderRadius: 12, textAlign: 'center', background: '#fafafa' }}>
              <label style={{ cursor: 'pointer', color: '#b08d6e', fontWeight: 600, fontSize: '.95rem' }}>
                + Ajouter une photo
                <input type="file" multiple accept="image/*" onChange={e => setFiles(e.target.files)} style={{ display: 'none' }} />
              </label>
              {files && <p style={{ fontSize: '.85rem', color: '#666', marginTop: '.3rem' }}>{files.length} fichier(s) — upload a l'enregistrement</p>}
            </div>
          </div>

          {/* Texte */}
          <div style={styles.card}>
            <h3 style={{ marginBottom: '1rem', color: '#444', fontWeight: 600 }}>2. Texte</h3>
            <label style={styles.label}>Titre de l'article *</label>
            <input style={styles.input} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required placeholder="Ex: Le Head Spa, un rituel venu du Japon" />

            <label style={styles.label}>Date</label>
            <input style={styles.input} type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />

            <label style={styles.label}>Texte de l'article <span style={{ fontWeight: 400, color: '#999' }}>(collez ou dictez votre texte — HTML accepte)</span></label>
            <textarea
              style={{ ...styles.input, minHeight: 250, lineHeight: 1.7 }}
              value={form.content}
              onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
              placeholder="Collez votre texte ici... Vous pouvez utiliser du HTML (<p>, <h2>, <strong>...) ou simplement coller du texte brut."
            />

            <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem', flexWrap: 'wrap' }}>
              <button type="button" onClick={autoFill} style={{ ...styles.btn, ...styles.btnSm, background: '#3498db' }}>Auto-remplir extrait + meta + tags</button>
            </div>

            <label style={styles.label}>Extrait <span style={{ fontWeight: 400, color: '#999' }}>(resume court pour la liste du blog)</span></label>
            <textarea style={{ ...styles.input, minHeight: 60 }} value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="Genere automatiquement si vide" />

            <label style={styles.label}>Tags (virgules)</label>
            <input style={styles.input} value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))} placeholder="Generes automatiquement si vide" />

            <label style={styles.label}>Meta description SEO</label>
            <input style={styles.input} value={form.meta_desc} onChange={e => setForm(f => ({ ...f, meta_desc: e.target.value }))} maxLength={160} placeholder="Generee automatiquement si vide" />
            <div style={{ fontSize: '.75rem', color: (form.meta_desc || '').length > 155 ? '#e74c3c' : '#999', marginTop: 2 }}>{(form.meta_desc || '').length}/160</div>
          </div>

          {/* FAQ */}
          <div style={styles.card}>
            <h3 style={{ marginBottom: '.5rem', color: '#444', fontWeight: 600 }}>
              3. FAQ <span style={{ fontWeight: 400, color: '#999' }}>(optionnel — ameliore le SEO avec JSON-LD FAQPage)</span>
            </h3>
            {form.faq.length === 0 && <p style={{ color: '#aaa', fontSize: '.9rem', marginBottom: '.5rem' }}>Aucune question. Ajoutez-en pour enrichir le schema JSON-LD.</p>}
            {form.faq.map((fq, i) => (
              <div key={i} style={{ border: '1px solid #eee', borderRadius: 8, padding: '.8rem', marginBottom: '.8rem', background: '#fafafa' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem' }}>
                  <span style={{ fontSize: '.8rem', fontWeight: 600, color: '#b08d6e' }}>Q{i + 1}</span>
                  <input style={{ ...styles.input, flex: 1 }} value={fq.q} onChange={e => updateFaq(i, 'q', e.target.value)} placeholder="Question..." />
                  <button type="button" onClick={() => removeFaq(i)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger, padding: '.3rem .5rem' }}>X</button>
                </div>
                <textarea style={{ ...styles.input, minHeight: 50, fontSize: '.9rem' }} value={fq.a} onChange={e => updateFaq(i, 'a', e.target.value)} placeholder="Reponse..." />
              </div>
            ))}
            <button type="button" onClick={addFaq} style={{ ...styles.btn, ...styles.btnSm }}>+ Ajouter une question</button>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button type="submit" disabled={saving || uploading} style={{ ...styles.btn, padding: '.8rem 2rem', fontSize: '1rem' }}>
              {saving ? 'Publication en cours...' : postId ? 'Mettre a jour' : 'Publier l\'article'}
            </button>
            <button type="button" onClick={onBack} style={{ ...styles.btn, background: '#888' }}>Annuler</button>
          </div>
        </form>
      )}
    </div>
  );
};

// ============================================================
// Prices
// ============================================================
// Prestations Planity (catalogue existant) pour le dropdown
const PLANITY_CATALOG = [
  { cat: 'Soins corps', items: ['Soin 100% sur-mesure – 1H', 'Soin signature Indonesie ancestrale', 'Modelage relaxant', 'Modelage californien 1h', 'Modelage californien 1h30', 'Soin du dos', 'Gommage evasion 30min', 'Modelage evasion 50min'] },
  { cat: 'Soins visage', items: ['Soin fondamental', 'Traitement intensif hydratant', 'Traitement intensif jeunesse', 'Soin eclat fraicheur bio', 'Soin saisonnier', 'Traitement defense eclat DX Glow'] },
  { cat: 'Beaute des mains', items: ['Soin express ongles', 'Pose semi-permanent', 'Depose + pose semi', 'Soin des mains', 'Pose en gel', 'Remplissage gel 2 sem.', 'Remplissage gel 3 sem.', 'Gainage', 'French', 'Babyboomer', 'Nail Art'] },
  { cat: 'Beaute des pieds', items: ['Soin express ongles pieds', 'Pose semi-permanent pieds', 'Soin des pieds', 'Calluspeeling'] },
  { cat: 'Beaute du regard', items: ['Teinture cils', 'Epilation sourcils', 'Browlift', 'Teinture sourcils', 'Teinture + epilation', 'Browlift + teinture + epilation', 'Epilation levres'] },
  { cat: 'Extensions de cils', items: ['Cil a cil – Pose complete', 'Cil a cil – Remplissage', 'Volume mixte – Pose', 'Volume mixte – Remplissage', 'Volume russe – Pose', 'Volume russe – Remplissage', 'Depose cils'] },
  { cat: 'Drainage lymphatique', items: ['Drainage jambes', 'Drainage jambes + ventre', 'Drainage corps entier', 'Cure jambes (5+1)', 'Cure jambes+ventre (5+1)', 'Cure corps entier (5+1)'] },
  { cat: 'Maquillage', items: ['Maquillage jour', 'Maquillage soir', 'Maquillage mariee'] },
];

const PricesPage: React.FC = () => {
  const [sections, setSections] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');
  const [showCatalog, setShowCatalog] = useState<number | null>(null);

  useEffect(() => {
    api('/prices').then(d => setSections(d?.sections || []));
  }, []);

  const addSection = () => setSections(s => [...s, { id: 'section_' + Date.now(), title: '', items: [] }]);

  const addSectionFromCatalog = (catLabel: string) => {
    const existing = sections.find(s => s.title === catLabel);
    if (existing) return;
    setSections(s => [...s, { id: 'section_' + Date.now(), title: catLabel, items: [] }]);
  };

  const addItem = (si: number) => {
    setSections(s => s.map((sec, i) => i === si ? { ...sec, items: [...sec.items, { id: 'item_' + Date.now(), label: '', price: '', duration: '', unit: '\u20ac', description: '' }] } : sec));
  };

  const addItemFromCatalog = (si: number, itemLabel: string) => {
    setSections(s => s.map((sec, i) => i === si ? { ...sec, items: [...sec.items, { id: 'item_' + Date.now(), label: itemLabel, price: '', duration: '', unit: '\u20ac', description: '' }] } : sec));
    setShowCatalog(null);
  };

  const updateSection = (si: number, title: string) => setSections(s => s.map((sec, i) => i === si ? { ...sec, title } : sec));
  const updateItem = (si: number, ii: number, field: string, value: string) => setSections(s => s.map((sec, i) => i === si ? { ...sec, items: sec.items.map((item: any, j: number) => j === ii ? { ...item, [field]: value } : item) } : sec));
  const removeItem = (si: number, ii: number) => setSections(s => s.map((sec, i) => i === si ? { ...sec, items: sec.items.filter((_: any, j: number) => j !== ii) } : sec));
  const removeSection = (si: number) => { if (confirm('Supprimer cette section ?')) setSections(s => s.filter((_, i) => i !== si)); };
  const moveSection = (si: number, dir: -1 | 1) => {
    const t = si + dir;
    setSections(s => { const a = [...s]; if (t < 0 || t >= a.length) return s; [a[si], a[t]] = [a[t], a[si]]; return a; });
  };

  const handleSave = async () => {
    setSaving(true);
    await api('/prices', { method: 'PUT', body: JSON.stringify({ sections }) });
    setMsg('Tarifs enregistres et page mise a jour !');
    setSaving(false);
    setTimeout(() => setMsg(''), 4000);
  };

  // Get catalog items for current section title
  const getCatalogItems = (sectionTitle: string) => {
    const cat = PLANITY_CATALOG.find(c => sectionTitle.toLowerCase().includes(c.cat.toLowerCase().slice(0, 8)));
    return cat?.items || [];
  };

  return (
    <div>
      <h1 style={styles.title}>Gestion des tarifs</h1>
      {msg && <div style={styles.success}>{msg}</div>}

      {/* Quick add from catalog */}
      <div style={{ ...styles.card, background: '#f0f7ff', borderLeft: '3px solid #3498db', marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '.8rem', color: '#444', fontWeight: 600, fontSize: '.95rem' }}>Ajouter une categorie depuis le catalogue Planity</h3>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
          {PLANITY_CATALOG.map(c => (
            <button key={c.cat} type="button" onClick={() => addSectionFromCatalog(c.cat)}
              style={{ padding: '.4rem .8rem', borderRadius: 16, border: '1px solid #ddd', background: sections.some(s => s.title === c.cat) ? '#e8e8e8' : '#fff', color: sections.some(s => s.title === c.cat) ? '#aaa' : '#333', fontSize: '.8rem', cursor: sections.some(s => s.title === c.cat) ? 'default' : 'pointer' }}
              disabled={sections.some(s => s.title === c.cat)}
            >
              {c.cat} {sections.some(s => s.title === c.cat) ? '✓' : '+'}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map((sec, si) => {
        const catalogItems = getCatalogItems(sec.title);
        return (
          <div key={sec.id} style={{ ...styles.card, border: '1px solid #e0e0e0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1rem' }}>
              <button type="button" onClick={() => moveSection(si, -1)} disabled={si === 0} style={{ ...styles.btn, ...styles.btnSm, padding: '.3rem .5rem', opacity: si === 0 ? .3 : 1 }}>↑</button>
              <button type="button" onClick={() => moveSection(si, 1)} disabled={si === sections.length - 1} style={{ ...styles.btn, ...styles.btnSm, padding: '.3rem .5rem', opacity: si === sections.length - 1 ? .3 : 1 }}>↓</button>
              <input style={{ ...styles.input, fontWeight: 700, fontSize: '1.05rem', flex: 1 }} value={sec.title} onChange={e => updateSection(si, e.target.value)} placeholder="Nom de la categorie" />
              <button type="button" onClick={() => removeSection(si)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger }}>Supprimer</button>
            </div>

            {/* Items */}
            {sec.items.map((item: any, ii: number) => (
              <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '1fr 90px 90px 40px', gap: '.4rem', marginBottom: '.4rem', alignItems: 'center' }}>
                <input style={{ ...styles.input, fontSize: '.9rem' }} value={item.label} onChange={e => updateItem(si, ii, 'label', e.target.value)} placeholder="Prestation" />
                <input style={{ ...styles.input, fontSize: '.9rem' }} value={item.duration || ''} onChange={e => updateItem(si, ii, 'duration', e.target.value)} placeholder="Duree" />
                <input style={{ ...styles.input, fontSize: '.9rem', fontWeight: 600 }} value={item.price} onChange={e => updateItem(si, ii, 'price', e.target.value)} placeholder="Prix" />
                <button type="button" onClick={() => removeItem(si, ii)} style={{ ...styles.btn, ...styles.btnSm, ...styles.btnDanger, padding: '.3rem' }}>X</button>
              </div>
            ))}

            {/* Add item */}
            <div style={{ display: 'flex', gap: '.5rem', marginTop: '.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button type="button" onClick={() => addItem(si)} style={{ ...styles.btn, ...styles.btnSm }}>+ Prestation libre</button>
              {catalogItems.length > 0 && (
                <>
                  <button type="button" onClick={() => setShowCatalog(showCatalog === si ? null : si)} style={{ ...styles.btn, ...styles.btnSm, background: '#3498db' }}>
                    {showCatalog === si ? 'Fermer catalogue' : 'Choisir depuis Planity'}
                  </button>
                  {showCatalog === si && (
                    <div style={{ width: '100%', display: 'flex', gap: '.3rem', flexWrap: 'wrap', marginTop: '.3rem', padding: '.5rem', background: '#f8f9fa', borderRadius: 8 }}>
                      {catalogItems.map(label => (
                        <button key={label} type="button" onClick={() => addItemFromCatalog(si, label)}
                          style={{ padding: '.3rem .6rem', borderRadius: 12, border: '1px solid #ddd', background: '#fff', fontSize: '.8rem', cursor: 'pointer', color: '#333' }}
                        >
                          + {label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        );
      })}

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button type="button" onClick={addSection} style={{ ...styles.btn, background: '#888' }}>+ Section personnalisee</button>
        <button onClick={handleSave} disabled={saving} style={{ ...styles.btn, padding: '.8rem 2rem' }}>{saving ? 'Enregistrement...' : 'Enregistrer les tarifs'}</button>
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

  const sidebarContent = (
    <>
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
    </>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      {/* Mobile top bar */}
      <div style={{ display: 'none', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#1a1a1a', padding: '.8rem 1.2rem', alignItems: 'center', justifyContent: 'space-between' }} className="admin-mobile-bar">
        <span style={{ color: '#b08d6e', fontWeight: 600, fontSize: '1rem' }}>Bianco Admin</span>
        <button onClick={() => setMobileOpen(o => !o)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', padding: '0 .3rem' }}>
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 40 }} className="admin-mobile-overlay" />
      )}

      {/* Sidebar — desktop: static, mobile: slide-over */}
      <nav style={{ width: 220, background: '#1a1a1a', color: '#fff', padding: '1.5rem 0', flexShrink: 0, display: 'flex', flexDirection: 'column', transition: 'transform .25s ease' }} className={`admin-sidebar ${mobileOpen ? 'open' : ''}`}>
        {sidebarContent}
      </nav>

      {/* Main content */}
      <div style={{ flex: 1, padding: '2rem 2.5rem', background: '#f5f5f5', overflowY: 'auto' }} className="admin-main">
        {renderPage()}
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .admin-mobile-bar { display: flex !important; }
          .admin-sidebar {
            position: fixed !important;
            top: 0; bottom: 0; left: 0;
            z-index: 45;
            transform: translateX(-100%);
            box-shadow: 4px 0 24px rgba(0,0,0,.3);
          }
          .admin-sidebar.open { transform: translateX(0) !important; }
          .admin-main { padding: 1rem !important; padding-top: 4rem !important; }
        }
      `}</style>
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
