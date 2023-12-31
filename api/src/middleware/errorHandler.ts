import { AppResponse } from "@neo4j-crud/shared";
import { NextFunction, Request } from "express";
import { Neo4jError } from "neo4j-driver";


export const errorHandler = (
    err: Neo4jError,
    req: Request,
    res: AppResponse<any>,
    next: NextFunction,
) => {
    console.error(err);
    res.status(500).send({ error: err.code });
};