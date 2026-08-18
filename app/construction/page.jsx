'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './construction.css';

export default function ConstructionPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function unlock(event) {
    event.preventDefault();
    setLoading(true);
    setError('');
    const response = await fetch('/api/access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      router.replace('/');
      router.refresh();
      return;
    }

    setLoading(false);
    setError('Mot de passe incorrect.');
  }

  return <section className="construction">
    <div className="construction-orbit orbit-one" />
    <div className="construction-orbit orbit-two" />
    <div className="construction-card">
      <div className="construction-mark"><span>F</span> FREEDOM <small>DISTRIBUTION</small></div>
      <p className="construction-kicker">Nouvelle expérience digitale</p>
      <h1>Notre site est<br /><em>en construction.</em></h1>
      <p className="construction-copy">Nous préparons une plateforme encore plus claire pour vous accompagner dans vos solutions ophtalmologiques.</p>
      <form onSubmit={unlock}>
        <label htmlFor="access-password">Accès réservé</label>
        <div className="construction-input">
          <input id="access-password" type="password" inputMode="numeric" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Mot de passe" required />
          <button type="submit" disabled={loading}>{loading ? 'Vérification…' : 'Accéder →'}</button>
        </div>
        {error && <p className="construction-error" role="alert">{error}</p>}
      </form>
      <p className="construction-footer">© {new Date().getFullYear()} Freedom Distribution</p>
    </div>
  </section>;
}
