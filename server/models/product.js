const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS products (
        product_id INT NOT NULL AUTO_INCREMENT,
        productname VARCHAR(255) NOT NULL UNIQUE,
        CONSTRAINT product_pk PRIMARY KEY(product_id)
    )`;
    await con.query(sql);
}
createTable();
let getProducts = async () => {
    const sql = "SELECT * FROM products";
    return await con.query(sql);
  };
  
  async function retrieveProduct(productname) {
    const sql = `SELECT * FROM products
    WHERE productname = "${productname}"
  `;
  let u = await con.query(sql);
  console.log(u);
  return u;
  }

  async function getProducts(product) {
      
      const sql = `INSERT INTO products(productname, product_id)
        VALUES ( "${product.productname}", "${product.product_id}"
        )`;
    const insert = await con.query(sql);
    const newProduct = await getProduct(product);
    return newproduct[0];
  }

  


   async function getProduct(product) {
       let sql;
       if(product.productId) {
           sql = `SELECT * FROM products
             WHERE productname = "${product.productId}
             `
       } else {
           sql = `SELECT * FROM  products
           WHERE productname = "${product.productname}"
           `
       }
       return await con.query(sql);
   }
   module.exports = {getProduct, getProducts, retrieveProduct, createTable}
