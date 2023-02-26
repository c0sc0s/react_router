// 封装我们的请求函数

import request from "./request";

export function getStuListApi() {
    return request({
        url: "/students",
        method: "GET",
    })
}

export function addStuApi(data) {
    return request({
        url: "/students",
        method: "POST",
        data
    })
}

export function editStuByIdApi(id, data) {
    return request({
        url: `/students/${id}`,
        method: "PUT",
        data
    })
}

export function getStuByIdApi(id) {
    return request({
        url: `/students/${id}`,
        method: "GET"
    })
}

export function deleteStuByIdApi(id) {
    return request({
        url: `/students/${id}`,
        method: "DELETE"
    })
}