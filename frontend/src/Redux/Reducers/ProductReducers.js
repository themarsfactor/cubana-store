import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../Constants/ProductConstants";



//PRODUCTS
export const productListReducer = (state = {products:[]}, action)=>{

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return{
                loading: true, products:[]
            };
        case PRODUCT_LIST_SUCCESS:
            return{ loading: false, products: action.payload};
        
        case PRODUCT_LIST_FAIL:
                return{ loading: false, error: action.payload};
        
        default:
            return state;
    }
};

//SINGLE PRODUCT
export const productDetailsReducer = (state = {product: {reviews:[]}}, action)=>{

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return{...state, loading: true,};
        case PRODUCT_DETAILS_SUCCESS:
            return{ loading: false, product: action.payload};
        
        case PRODUCT_DETAILS_FAIL:
                return{ loading: false, error: action.payload};
        
        default:
            return state;
    }
};