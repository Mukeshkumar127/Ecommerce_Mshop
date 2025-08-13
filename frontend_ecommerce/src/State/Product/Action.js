import { api, API_BASE_URL } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  try {
    const queryParams = new URLSearchParams();

    if (reqData.category) queryParams.append("category", reqData.category);
    if (reqData.colors) queryParams.append("color", reqData.colors); 
    if (reqData.sizes && reqData.sizes.length > 0) queryParams.append("sizes", reqData.sizes.join(","));
    if (reqData.minPrice != null) queryParams.append("minPrice", reqData.minPrice);
    if (reqData.maxPrice != null) queryParams.append("maxPrice", reqData.maxPrice);
    if (reqData.sort) queryParams.append("sort", reqData.sort);
    if (reqData.stock) queryParams.append("stock", reqData.stock);
    if (reqData.pageNumber) queryParams.append("pageNumber", reqData.pageNumber);
    if (reqData.pageSize) queryParams.append("pageSize", reqData.pageSize);

    const { data } = await api.get(`/api/products?${queryParams.toString()}`);

    console.log("product data", data);

    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};


export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const{productId} = reqData;
    console.log("product id", productId);
    
    try {
        const {data} =await api.get(`/api/products/id/${productId}`)
        console.log("data",data);

        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message})
    }
}


export const createProduct=(product)=> async(dispatch)=>{
  console.log("create product data - ", product);
  
  try {
    dispatch({type: CREATE_PRODUCT_REQUEST})

    const {data} = await api.post(`/api/admin/products/`,product);

    console.log("created products ", data);
    
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload:data,
    })
  }
  catch (error) {
    console.log("catch error ",error);
    
    dispatch({type:CREATE_PRODUCT_FAILURE, payload:error.message})
  }
}


export const deleteProduct=(productId)=> async(dispatch)=>{
  try {
    dispatch({type: DELETE_PRODUCT_REQUEST})

    const {data} = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}`);

    console.log("delete product", data);
    
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload:productId,
    })
  }
  catch (error) {
    dispatch({type:DELETE_PRODUCT_FAILURE, payload:error.message})
  }
}