import { Request, Response } from "express";
import { pool } from '../config/database';


export const fetchDiscount = async (req: Request, res: Response) => {
    console.log("fetchDiscount");

    try {
        const client = await pool.connect();
        const discountQuery = `SELECT d.discount_name, pd.discount_value, CAST(d.created_date AS TIME) AS created_time, COUNT(*) AS applied_count
        FROM tenant_143.product_discount pd
        JOIN tenant_143.discount d ON pd.discount_id = d.discount_id
        GROUP BY d.discount_name, pd.discount_value, created_time;
        
    `;

        const discountResult = await client.query(discountQuery);

        const discount = discountResult.rows;

        return res.json(discount)

        client.release();

    }
    catch (error) {
        console.log({ error });

    }
}