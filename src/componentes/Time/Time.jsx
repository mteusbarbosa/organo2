import Colaborador from "../Colaborador/Colaborador";
import "./time.css";

export default function Time({ time, colaboradores }) {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: time.corPrimaria,
        }}
      >
        <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => (
            <Colaborador
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.corSecundaria}
            />
          ))}
        </div>
      </section>
    )
  );
}
