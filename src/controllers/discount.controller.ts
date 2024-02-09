import { Request, Response } from "express";
import { pool } from '../config/database';


export const fetchDiscount = async (req: Request, res: Response) => {
    try {
        const client = await pool.connect();
        const discountQuery = `SELECT 
        d.discount_name,
        cd.discount_percentage,
        cd.discount_amount
     FROM 
        tenant_143.discount AS d
    JOIN 
    tenant_143.cart_discount AS cd ON d.discount_id = cd.discount_id
    `;

        const discountResult = await client.query(discountQuery);

        const discount = discountResult.rows;

        return discount;

        client.release();

    }
    catch (error) {
        console.log({ error });

    }
}