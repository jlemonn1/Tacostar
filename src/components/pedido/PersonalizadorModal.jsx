import React, { useState, useMemo } from 'react';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { customTacoConfig, calcCustomPrice } from '../../data/orderConfig';
import './PersonalizadorModal.css';

const STEPS = [
  { key: 'size', label: 'Tamaño' },
  { key: 'proteins', label: 'Proteínas' },
  { key: 'base', label: 'Base' },
  { key: 'sauces', label: 'Salsas' },
  { key: 'extras', label: 'Extras' },
  { key: 'gratin', label: 'Gratinación' },
  { key: 'menu', label: 'Menú' },
];

const PersonalizadorModal = ({ isOpen, onClose, onAdd }) => {
  const [step, setStep] = useState(0);
  const [selection, setSelection] = useState({
    size: 'simple',
    proteins: [],
    base: 'base1',
    sauces: [],
    extras: [],
    gratin: '',
    withMenu: false,
    drinkSize: '33cl',
  });

  const size = useMemo(() => customTacoConfig.sizes.find(s => s.key === selection.size), [selection.size]);
  const currentPrice = useMemo(() => calcCustomPrice(selection), [selection]);

  if (!isOpen) return null;

  const handleSizeChange = (key) => {
    setSelection(prev => ({
      ...prev,
      size: key,
      proteins: prev.proteins.slice(0, customTacoConfig.sizes.find(s => s.key === key).maxProteins),
    }));
  };

  const toggleProtein = (key) => {
    setSelection(prev => {
      const max = size.maxProteins;
      const has = prev.proteins.includes(key);
      if (has) return { ...prev, proteins: prev.proteins.filter(p => p !== key) };
      if (prev.proteins.length >= max) return prev;
      return { ...prev, proteins: [...prev.proteins, key] };
    });
  };

  const toggleSauce = (key) => {
    setSelection(prev => {
      const has = prev.sauces.includes(key);
      if (has) return { ...prev, sauces: prev.sauces.filter(s => s !== key) };
      if (prev.sauces.length >= 2) return prev;
      return { ...prev, sauces: [...prev.sauces, key] };
    });
  };

  const toggleExtra = (key) => {
    setSelection(prev => {
      const has = prev.extras.includes(key);
      if (has) return { ...prev, extras: prev.extras.filter(e => e !== key) };
      return { ...prev, extras: [...prev.extras, key] };
    });
  };

  const canNext = () => {
    if (step === 1) return selection.proteins.length > 0 && selection.proteins.length <= size.maxProteins;
    return true;
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleAdd = () => {
    onAdd(selection);
    setStep(0);
    setSelection({ size: 'simple', proteins: [], base: 'base1', sauces: [], extras: [], gratin: '', withMenu: false, drinkSize: '33cl' });
    onClose();
  };

  const isLastStep = step === STEPS.length - 1;

  return (
    <div className="personalizador-overlay" onClick={onClose}>
      <div className="personalizador-modal" onClick={e => e.stopPropagation()}>
        <button className="personalizador-close" onClick={onClose} aria-label="Cerrar">
          <X size={24} />
        </button>

        <div className="personalizador-header">
          <h2 className="personalizador-title">A tu gusto</h2>
          <div className="personalizador-steps">
            {STEPS.map((s, i) => (
              <span key={s.key} className={`personalizador-step ${i === step ? 'personalizador-step--active' : ''} ${i < step ? 'personalizador-step--done' : ''}`}>
                {i < step ? <Check size={12} /> : i + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="personalizador-body">
          {step === 0 && (
            <div className="personalizador-step-content">
              <p className="personalizador-step-label">Elige el tamaño</p>
              <div className="personalizador-options personalizador-options--grid">
                {customTacoConfig.sizes.map(s => (
                  <button
                    key={s.key}
                    className={`personalizador-option ${selection.size === s.key ? 'personalizador-option--active' : ''}`}
                    onClick={() => handleSizeChange(s.key)}
                  >
                    <span className="personalizador-option__name">{s.name}</span>
                    <span className="personalizador-option__meta">{s.maxProteins} carne{s.maxProteins > 1 ? 's' : ''}</span>
                    <span className="personalizador-option__price">{s.basePrice.toFixed(2).replace('.', ',')}€</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="personalizador-step-content">
              <p className="personalizador-step-label">Elige hasta {size.maxProteins} proteína{size.maxProteins > 1 ? 's' : ''}</p>
              <div className="personalizador-options personalizador-options--grid personalizador-options--small">
                {customTacoConfig.proteins.map(p => {
                  const isSelected = selection.proteins.includes(p.key);
                  return (
                    <button
                      key={p.key}
                      className={`personalizador-option ${isSelected ? 'personalizador-option--active' : ''}`}
                      onClick={() => toggleProtein(p.key)}
                    >
                      {isSelected && (
                        <span
                          className="personalizador-option__deselect"
                          onClick={e => { e.stopPropagation(); setSelection(prev => ({ ...prev, proteins: prev.proteins.filter(x => x !== p.key) })); }}
                          aria-label="Deseleccionar"
                        >
                          <X size={10} />
                        </span>
                      )}
                      <span className="personalizador-option__name">{p.name}</span>
                      {p.extraPrice > 0 && <span className="personalizador-option__extra">+{p.extraPrice.toFixed(2).replace('.', ',')}€</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="personalizador-step-content">
              <p className="personalizador-step-label">Elige la base</p>
              <div className="personalizador-options personalizador-options--grid">
                {customTacoConfig.bases.map(b => (
                  <button
                    key={b.key}
                    className={`personalizador-option ${selection.base === b.key ? 'personalizador-option--active' : ''}`}
                    onClick={() => setSelection(prev => ({ ...prev, base: b.key }))}
                  >
                    <span className="personalizador-option__name">{b.name}</span>
                    <span className="personalizador-option__meta">{b.description}</span>
                    {b.extraPrice > 0 && <span className="personalizador-option__extra">+{b.extraPrice.toFixed(2).replace('.', ',')}€</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="personalizador-step-content">
              <p className="personalizador-step-label">Elige hasta 2 salsas</p>
              <div className="personalizador-options personalizador-options--grid personalizador-options--small">
                {customTacoConfig.sauces.map(s => {
                  const isSelected = selection.sauces.includes(s.key);
                  return (
                    <button
                      key={s.key}
                      className={`personalizador-option ${isSelected ? 'personalizador-option--active' : ''}`}
                      onClick={() => toggleSauce(s.key)}
                    >
                      {isSelected && (
                        <span
                          className="personalizador-option__deselect"
                          onClick={e => { e.stopPropagation(); setSelection(prev => ({ ...prev, sauces: prev.sauces.filter(x => x !== s.key) })); }}
                          aria-label="Deseleccionar"
                        >
                          <X size={10} />
                        </span>
                      )}
                      <span className="personalizador-option__name">{s.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="personalizador-step-content">
              <p className="personalizador-step-label">Añade extras</p>
              <div className="personalizador-options personalizador-options--grid personalizador-options--small">
                {customTacoConfig.extras.map(e => {
                  const isSelected = selection.extras.includes(e.key);
                  return (
                    <button
                      key={e.key}
                      className={`personalizador-option ${isSelected ? 'personalizador-option--active' : ''}`}
                      onClick={() => toggleExtra(e.key)}
                    >
                      {isSelected && (
                        <span
                          className="personalizador-option__deselect"
                          onClick={ev => { ev.stopPropagation(); setSelection(prev => ({ ...prev, extras: prev.extras.filter(x => x !== e.key) })); }}
                          aria-label="Deseleccionar"
                        >
                          <X size={10} />
                        </span>
                      )}
                      <span className="personalizador-option__name">{e.name}</span>
                      <span className="personalizador-option__extra">+{e.extraPrice.toFixed(2).replace('.', ',')}€</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="personalizador-step-content">
              <p className="personalizador-step-label">Elige gratinación</p>
              <div className="personalizador-options personalizador-options--grid">
                <button
                  className={`personalizador-option ${selection.gratin === '' ? 'personalizador-option--active' : ''}`}
                  onClick={() => setSelection(prev => ({ ...prev, gratin: '' }))}
                >
                  <span className="personalizador-option__name">Sin gratinar</span>
                  <span className="personalizador-option__meta">Sin coste extra</span>
                </button>
                {customTacoConfig.gratins.map(g => (
                  <button
                    key={g.key}
                    className={`personalizador-option ${selection.gratin === g.key ? 'personalizador-option--active' : ''}`}
                    onClick={() => setSelection(prev => ({ ...prev, gratin: g.key }))}
                  >
                    <span className="personalizador-option__name">{g.name}</span>
                    <span className="personalizador-option__extra">+{g.extraPrice.toFixed(2).replace('.', ',')}€</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="personalizador-step-content">
              <p className="personalizador-step-label">¿Añadir menú?</p>
              <div className="personalizador-options personalizador-options--grid">
                <button
                  className={`personalizador-option ${!selection.withMenu ? 'personalizador-option--active' : ''}`}
                  onClick={() => setSelection(prev => ({ ...prev, withMenu: false }))}
                >
                  <span className="personalizador-option__name">Solo taco</span>
                </button>
                <button
                  className={`personalizador-option ${selection.withMenu ? 'personalizador-option--active' : ''}`}
                  onClick={() => setSelection(prev => ({ ...prev, withMenu: true }))}
                >
                  <span className="personalizador-option__name">Menú</span>
                  <span className="personalizador-option__meta">Patatas + bebida</span>
                  <span className="personalizador-option__extra">+{size.menuPrice.toFixed(2).replace('.', ',')}€</span>
                </button>
              </div>
              {selection.withMenu && (
                <div className="personalizador-submenu">
                  <p className="personalizador-step-label" style={{ marginTop: '1rem' }}>Tamaño de bebida</p>
                  <div className="personalizador-options personalizador-options--grid">
                    <button
                      className={`personalizador-option ${selection.drinkSize === '33cl' ? 'personalizador-option--active' : ''}`}
                      onClick={() => setSelection(prev => ({ ...prev, drinkSize: '33cl' }))}
                    >
                      <span className="personalizador-option__name">33 cl</span>
                      <span className="personalizador-option__meta">Incluido</span>
                    </button>
                    <button
                      className={`personalizador-option ${selection.drinkSize === '50cl' ? 'personalizador-option--active' : ''}`}
                      onClick={() => setSelection(prev => ({ ...prev, drinkSize: '50cl' }))}
                    >
                      <span className="personalizador-option__name">50 cl</span>
                      <span className="personalizador-option__extra">+0,50€</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="personalizador-footer">
          <div className="personalizador-preview">
            <span className="personalizador-preview__label">Total:</span>
            <span className="personalizador-preview__price">{currentPrice.toFixed(2).replace('.', ',')}€</span>
          </div>
          <div className="personalizador-actions">
            {step > 0 && (
              <button className="personalizador-btn personalizador-btn--secondary" onClick={handlePrev}>
                <ChevronLeft size={18} /> Anterior
              </button>
            )}
            {!isLastStep ? (
              <button className="personalizador-btn personalizador-btn--primary" onClick={handleNext} disabled={!canNext()}>
                Siguiente <ChevronRight size={18} />
              </button>
            ) : (
              <button className="personalizador-btn personalizador-btn--primary" onClick={handleAdd}>
                <Check size={18} /> Añadir al pedido
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizadorModal;
