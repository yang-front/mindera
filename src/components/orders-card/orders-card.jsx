import { useRef } from 'react'

import { 
    CardContainer, 
    CardContent, 
    CardHeader, 
    MobileTag, 
    ProductName, 
    TableHeader, 
    TableItem, 
    Weekday 
} from "./orders-card.styles"

import {orders} from './orders'

const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function getUniqueProducts(orders){
    let products = []
    let uniqueProducts = []
    orders.forEach((order) => {
        order.orderLines.forEach((product) => {
            products.push(product)
        })
    })
    uniqueProducts = products.map(e => e['productId'])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter((e) => products[e]).map(e => products[e]);

    return uniqueProducts.sort(dynamicSort("productId"));
}

function totalQuantity(orders, productId, day){
    var sum = [0,0,0,0,0,0,0]

    orders.map((order, index) => (
        order.orderLines.forEach((product, index) => {
            let orderDate = new Date(order.creationDate).getDay()
            if(productId === product.productId){
                weekdays.forEach((weekday, dayIndex) => {
                    if(orderDate === dayIndex){
                       sum[dayIndex] = sum[dayIndex] + product.quantity
                    }
                })
            }
        })
    ))
    
    return sum[day]
}


const OrdersCard = () => {
    let products = useRef([])
    products.current = getUniqueProducts(orders)
    
    return (
        <CardContainer>
            <CardHeader>Orders Spreadsheet</CardHeader>
            <CardContent>
                <TableHeader>
                    <ProductName>#ID - Product Name</ProductName>
                    {weekdays.map((day, index) => (
                        <Weekday key={index }>{day}</Weekday>
                    ))}
                </TableHeader>
                {products.current.map((product, index) => (
                    <TableItem key={index}>
                        <ProductName>#{product.productId} - {product.name}</ProductName>
                        {weekdays.map((day, index) => (
                            <Weekday key={index }><MobileTag>{day}: </MobileTag>{totalQuantity(orders, product.productId, index)}</Weekday>
                        ))}
                    </TableItem>
                ))}
            </CardContent> 
        </CardContainer>
    )
}

export default OrdersCard