export const insertRecycleCommodity = (recycleCommodity) => {
    console.log(recycleCommodity);
    return new Promise((resolve) => {
        resolve({
            code: 200,
            msg: 'success',
            data: {
                name: 'test'
            }
        });
    })
};

export const updateCommodityToStart = (commodityNo) => {
    console.log(commodityNo);
    return new Promise((resolve) => {
        resolve({
            code: 200,
            msg: 'success',
            data: {
                name: 'test'
            }
        });
    })
};

export const updateCommodityToStop = (commodityNo) => {
    console.log(commodityNo);
    return new Promise((resolve) => {
        resolve({
            code: 200,
            msg: 'success',
            data: {
                name: 'test'
            }
        });
    })
};

export const getAllRecycleCollector = () => {
    return new Promise((resolve) => {
        resolve({
            code: 200,
            msg: 'success',
            data: [
                {
                    collectorNo: '12332',
                    username: 'test1'
                },
                {
                    collectorNo: '123323',
                    username: 'test2'
                }
            ]
        });
    })
};

export const getAllCommodityType = () => {
    return new Promise((resolve) => {
        resolve({
            code: 200,
            msg: 'success',
            data: [
                {
                    id: '1',
                    name: 'test1'
                },
                {
                    id: '2',
                    name: 'test2'
                }
            ]
        });
    })
};

/**
 * 获取回收的商品列表信息
 *
 * @returns {Promise<{code: number, msg: string, data: {count: number, hasNextPage: boolean, pageNum: number, list: *[]}}>}
 */
export function getRecycleCommodity(pageNum, pageSize) {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            count: 100,
            hasNextPage: true,
            pageNum: 1,
            list: [{
                id: 1,
                collectorId: 1,
                collectorName: 'test',
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 2,
                collectorName: 'test',
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 3,
                collectorName: 'test',
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 4,
                collectorName: 'test',
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 5,
                collectorName: 'test',
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 6,
                collectorName: 'test',
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 7,
                collectorName: 'test',
                collectorId: 1,
                villageId: 1,
                commodityNo: 'SP0010010001',
                commodityName: '电视机',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/tt.jpeg',
                commodityStatus: 1,
                commodityType: 1,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }, {
                id: 8,
                collectorName: 'test',
                collectorId: 2,
                villageId: 2,
                commodityNo: 'SP0010010001',
                commodityName: '液晶电视机27寸',
                commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
                commodityStatus: 2,
                commodityType: 2,
                recycleTime: '2018-08-15 13:58:43',
                recyclePrice: '12.5',
                expectSellPrice: '23.5',
                actualSellPrice: '23.5',
                remark: '王牌电视，质量有保证，并且画质清晰，屏幕27寸',
            }]
        }
    });
}

/**
 * 商品详情数据
 *
 * @param commodityNo 商品编号
 * @returns {Promise<{code: number, msg: string, data: {commodityNo: string, commodityName: string, commodityPicture: string, recycleTime: string, expectSellPrice: string}}>}
 */
export function getCommodityDetail(commodityNo) {
    const commodityDetail = {
        code: 200,
        msg: '',
        data: {
            commodityNo: 'SP0010010001',
            commodityName: '液晶电视机27寸',
            commodityPicture: 'https://zfguan.oss-cn-beijing.aliyuncs.com/img1.jpeg',
            recycleTime: '2018-08-15 13:58:43',
            expectSellPrice: '23.5',
            imgUrl: [
                'http://static.bootcss.com/www/assets/img/opencdn.png',
                'http://static.bootcss.com/www/assets/img/gulpjs.png',
                'http://static.bootcss.com/www/assets/img/flat-ui.png',
            ]
        }
    };
    return new Promise((resolve) => {
        resolve(commodityDetail);
    })
}

/**
 * 获取商品收集人信息列表
 */
export function getCommodityCollector() {
    return Promise.resolve({
        code: 200,
        msg: '',
        data: {
            count: 100,
            hasNextPage: 1,
            pageNum: 1,
            list: [{
                id: 1,
                collectorNo: 'FPHS0010001',
                status: 1,
                statusDesc: '存在',
                username: 'test',
                phone: '12345678900',
                sex: 1,
                sexDesc: '男',
                address: '测试地址100号',
                avatar: ''
            }, {
                id: 2,
                collectorNo: 'FPHS0010001',
                status: 2,
                statusDesc: '不存在',
                username: 'test',
                phone: '12345678900',
                sex: 2,
                sexDesc: '女',
                address: '测试地址100号',
                avatar: ''
            }]
        }
    })
};

export const insertCommodityType = (typeInfo) => {
    console.log(typeInfo);
    return new Promise((resolve) => {
        resolve({
            code: 200,
            msg: 'success',
            data: {
                name: 'test'
            }
        });
    })
};

export const insertCollector = (RecycleCollector) => {
    console.log(RecycleCollector);
    return new Promise((resolve) => {
        resolve({
            code: 200,
            msg: 'success',
            data: {
                name: 'test'
            }
        });
    })
}
