import HTTP from '../lib/http';
import CONSTANT from '../lib/constant';

const basePath = CONSTANT.DOMAIN_NAME;

export const insertRecycleCommodity = (recycleCommodity) => {
    return HTTP.post(`${basePath}/oss/commodity/insert`, recycleCommodity);
};

export const updateCommodityToStart = (commodityNo) => {
    const data = {
        commodityNo: commodityNo,
    };
    return HTTP.post(`${basePath}/oss/commodity/updateCommodityToStart`, data);
};

export const updateCommodityToStop = (commodityNo) => {
    const data = {
        commodityNo: commodityNo,
    };
    return HTTP.post(`${basePath}/oss/commodity/updateCommodityToStop`, data);
};

export const getRecycleCommodity = (pageNum, pageSize) => {
    const data = {
        pageNum: pageNum,
        pageSize: pageSize
    };
    return HTTP.get(`${basePath}/oss/commodity/getRecycleCommodityPage`, data);
};

export const getCommodityDetail = (commodityNo) => {
    const data = {
        commodityNo: commodityNo
    };
    return HTTP.get(`${basePath}/oss/commodity/getCommodityDetail`, data);
};

export const getAllRecycleCollector = () => {
    const data = {};
    return HTTP.get(`${basePath}/oss/collector/getAllRecycleCollector`, data);
};

export const getAllCommodityType = () => {
    const data = {};
    return HTTP.get(`${basePath}/oss/common/getAllCommodityType`, data);
};

export const insertCommodityType = (typeInfo) => {
    return HTTP.post(`${basePath}/oss/common/insertCommodityType`, typeInfo);
};

export const deleteCommodityType = (id) => {
    const data = {id: id};
    return HTTP.get(`${basePath}/oss/common/deleteCommodityType`, data);
};

export const insertCollector = (collector) => {
    console.log(collector);
    return HTTP.post(`${basePath}/oss/collector/insertRecycleCollector`, collector);
};

export const deleteCollector = (collectorNo) => {
    const data = {collectorNo: collectorNo};
    return HTTP.get(`${basePath}/oss/collector/deleteRecycleCollector`, data);
};
