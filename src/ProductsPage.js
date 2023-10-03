import React from 'react';
import './ProductsPage.css';
import { useHistory } from 'react-router-dom'; // Importando useHistory

const products = [
    { name: 'Pó de Guaraná', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWVrSnvhTTBj-mVbybUxriE8xgHJ-e4x_vSdA92zKRaFd2Yq-8q3JSSHWdKnWUhMO1Fs&usqp=CAU', description: 'Esqueça as bebidas energéticas industrializadas! O guaraná oferece uma explosão de energia duradoura, além de melhorar o foco e a concentração. Ideal para começar bem o dia ou para aquela turbinada antes do treino.' },
    { name: 'Maca Peruana', image: 'https://camomilacuritiba.com.br/wp-content/uploads/2018/09/Maca-peruana.jpg', description: 'Quer melhorar o desempenho na academia e na vida amorosa? A maca peruana ajuda a aumentar a resistência física e a libido. Este tubérculo andino também equilibra os hormônios, tornando-se uma escolha inteligente para homens e mulheres.' },
    // ... adicionei os outros 17 produtos abaixo
    { name: 'Chia', image: 'https://cdn.awsli.com.br/600x450/2216/2216236/produto/1504350340b9959636b.jpg', description: 'Melhore a saúde do coração e auxilie na perda de peso. Um superalimento que você não pode deixar de ter!' },
    { name: 'Quinoa', image: 'https://www.emporiofigueira.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/q/u/quinua_gr_os_preta_001.jpg', description: 'Abasteça seu corpo com todos os aminoácidos essenciais que ele precisa. Perfeito para vegetarianos e veganos!' },
    { name: 'Óleo de Coco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFKATOdcVUx_sJsMxIrEd_i34ohEo7UL-GiodLAeEKy32GZU2SJ3ID0vSNePH5YxSUbU&usqp=CAU', description: 'Deixe sua pele brilhante e sua comida deliciosa. Um dois em um que você vai adorar!' },
    { name: 'Goji Berry', image: 'https://images.tcdn.com.br/img/img_prod/971897/goji_berry_1115_1_315df2eecf64731c49683f52b523da13.jpg', description: 'Desintoxique seu corpo e melhore a visão com estas pequenas bagas potentes.' },
    { name: 'Spirulina', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQimLQi13-vaOQMJbRjAzLC6oCwKFPE82mc0pCOnerkVqQYIhFUDI8yhW6SAPNj14Q9r0&usqp=CAU', description: 'Quer mais proteína sem a carne? Esta é a escolha perfeita.' },
    { name: 'Cúrcuma', image: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/curcuma.jpg', description: 'Diga adeus às dores articulares e inflamações. Adicione um toque saudável e saboroso às suas refeições.' },
    { name: 'Proteína Vegetal', image: 'https://boomi.b-cdn.net/wp-content/uploads/2020/11/As-15-melhores-fontes-de-proteina-para-veganos-e-vegetarianos-1.png', description: 'Mantenha seus músculos fortes e saudáveis sem produtos de origem animal.' },
    { name: 'Levedura de Cerveja', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-IH3epDhV7Jh5x3Nu7GzEfjKkhsKgry4qfKyPqxDdMv8TNY80oZ50GJ9ivZexAqXly0&usqp=CAU', description: 'Dê um up no seu sistema nervoso e melhore sua energia diária.' },
    { name: 'Matcha', image: 'https://cdn.awsli.com.br/600x450/1311/1311630/produto/51986050/490f178cd3.jpg', description: 'Esqueça o café! Matcha é o novo queridinho para foco e energia duradouros.' },
    { name: 'Gengibre em Pó', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MMI3dxKZYzq8mnjLpsOiMnKQnthwmyFwk6CpvGgwnX5zMS7d9goyFY89qA-ptBzJSKY&usqp=CAU', description: 'Além de dar sabor, ajuda na digestão e fortalece o sistema imunológico.' },
    { name: 'Kombucha', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Yu4JLm-0yVvEaZp6zRhDZWUBlWf_OoZmUin3CKic-cVVcswgXmHIdrg0zR_4h8mlENE&usqp=CAU', description: 'Cuide do seu intestino e melhore sua digestão com esta bebida fermentada.' },
    { name: 'Sementes de Abóbora', image: 'https://catracalivre.com.br/wp-content/uploads/2023/06/istock-1175603836-910x607.jpg', description: 'Ótimo para relaxar os músculos e melhorar o sono.' },
    { name: 'Óleo Essencial de Lavanda', image: 'https://br.do-essential-oils.com/cdn/shop/files/Untitleddesign_44_4286f1d5-7d1a-42f4-969b-95b6248a8fe3_720x.png?v=1684918652', description: 'Melhore seu sono e reduza o estresse com apenas algumas gotas.' },
    { name: 'Chás de Ervas', image: 'https://ciclovivo.com.br/wp-content/uploads/2021/05/plantas-Brasil-cha-1024x714.jpg', description: 'Uma xícara deste chá pode ser a solução para seus problemas de digestão e insônia.' },
];


const ProductsPage = () => {
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    };

    return (
        <div className="products-page">
            <button className="back-btn" onClick={goBack}>Voltar</button>
            <h1 className="page-title">Nossos Produtos</h1> {/* Adicione a classe page-title */}
            <div className="products-list">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <div className="product-info">
                            <h2 className="product-name">{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                        <img
                            className="product-image"
                            src={product.image}
                            alt={product.name}
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
