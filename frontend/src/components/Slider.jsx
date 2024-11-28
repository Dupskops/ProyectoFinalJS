import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderComponent = () => {
  return (
    <div style={{ margin: '20px 0' }}>
      <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
        {/* Primera diapositiva */}
        <div>
          <img
            src="https://img.freepik.com/foto-gratis/concepto-humano-versus-ia_1194-617312.jpg?t=st=1732749840~exp=1732753440~hmac=1e26a665ed05b9dd49b53f9b6434ed7a4c12cdfb75a281d35a792d015a5a9269&w=900"
            alt="Slide 1"
            style={{ width: '1100px', height: '600px', objectFit: 'cover' }}
          />
          <p className="legend">
            **1950 - Primeros pasos de la IA:** La historia de la Inteligencia Artificial comenzó formalmente en 1950 con la publicación del artículo *"Computing Machinery and Intelligence"* de Alan Turing. En este trabajo, Turing introdujo el famoso *Test de Turing*, diseñado para evaluar si una máquina puede exhibir comportamiento inteligente equivalente o indistinguible al de un ser humano. Esta época marcó el inicio de la búsqueda para crear máquinas pensantes, acompañada del desarrollo de las primeras computadoras.
          </p>
        </div>

        {/* Segunda diapositiva */}
        <div>
          <img
            src="https://img.freepik.com/foto-gratis/inteligencia-artificial-chip-ai-innovacion-tecnologica-futura_53876-129780.jpg?t=st=1732749874~exp=1732753474~hmac=0b802cef41eebd7ffac609998963ec880be2629e0eccb896a1c0cf7d2626336e&w=900"
            alt="Slide 2"
            style={{ width: '1100px', height: '600px', objectFit: 'cover' }}
          />
          <p className="legend">
            **1980 - Sistemas expertos:** En los años 80, la IA vivió un auge con el desarrollo de los sistemas expertos, programas diseñados para simular el conocimiento y las habilidades de especialistas humanos en áreas específicas. Estos sistemas tuvieron aplicaciones prácticas en la medicina, como el diagnóstico de enfermedades, y en la industria, optimizando procesos de fabricación. Sin embargo, el alto costo de desarrollo y las limitaciones computacionales llevaron a lo que se conoció como *el invierno de la IA*, un periodo de menor interés y financiamiento para la investigación en inteligencia artificial.
          </p>
        </div>

        {/* Tercera diapositiva */}
        <div>
          <img
            src="https://img.freepik.com/foto-gratis/tecnologia-edicion-genes-adn-ai-ingenieria-genetica-biotecnologica_53876-143120.jpg?t=st=1732750535~exp=1732754135~hmac=2caf51cc95ac2b5be4f476e8667220d57cfb4839a5bd5e123e4f61b2e1bf2fab&w=900"
            alt="Slide 3"
            style={{ width: '1100px', height: '600px', objectFit: 'cover' }}
          />
          <p className="legend">
            **Presente y futuro de la IA:** En la actualidad, la IA está presente en casi todos los aspectos de la vida diaria. Desde asistentes virtuales como Siri y Alexa hasta sistemas de aprendizaje profundo (*deep learning*) que permiten avances en la visión por computadora, procesamiento de lenguaje natural y robótica. Empresas como Google, OpenAI y DeepMind lideran investigaciones que exploran límites más allá de lo imaginable, como la creación de modelos generativos y la búsqueda de inteligencias artificiales más éticas y responsables.
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderComponent;
