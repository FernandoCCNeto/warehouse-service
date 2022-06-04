import express from 'express';
import WarehouseRepositoryArray from './warehouse/adapter/repository/warehouseRepositoryArray';
import WarehouseController from './warehouse/http/rest/warehouseController';

const warehouseRepository = new WarehouseRepositoryArray();
const warehouseController = new WarehouseController(warehouseRepository);

const app = express();

app.use(express.json());
app.use('/warehouse', warehouseController.buildRouter());

export default app;
