import Colaborador from "../Colaborador/Colaborador";
import "./time.css";
import hexToRgba from "hex-to-rgba";

export default function Time({ time, colaboradores, aoDeletar, mudarCor }) {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.6"),
        }}
      >
        <input
          type="color"
          className="input-cor"
          onChange={(event) => mudarCor(event.target.value, time.id)}
          value={time.cor}
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.id}
                colaborador={colaborador}
                corDeFundo={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
}
