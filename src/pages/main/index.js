import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css'
import {Link} from 'react-router-dom';

export default class Main extends Component{

    state = {//state é definito para que um metodo proprio acesse as variaveis e atualize a cada alteração feita
        products:[],
        productInfo: {},
        page: 1,
    };

    componentDidMount(){//metodo para sempre que o componente serao carregadoe esse metodo executa
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)
        // console.log(response)
        const {docs, ...productInfo} = response.data;

        this.setState({products: docs, productInfo, page })//atualizando state ou seja todas as variaveis contidas nela
    }

    prevPage = () =>{
        const {page, productInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;
 
        this.loadProducts(pageNumber)//voltando para pagina anterior 
    }
    nextPage = () =>{
        const {page, productInfo} = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)//indo para proxima pagina

    }

    render(){
        const {products, page, productInfo} = this.state;
        return  (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        {/* <a href="">Acessar</a> */}
                        <Link to={`/products/${product._id }` }>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page ===1 } onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages } onClick={this.nextPage}>Próxima</button>
                </div>    
            </div>
        )
    }
} 