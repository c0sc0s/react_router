import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getStuByIdApi, deleteStuByIdApi } from '../api/stuApi';

export default function Detail() {

  let [stu, setStu] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getStuByIdApi(id).then(({ data }) => {
      setStu(data)
    })
  })

  function deleteStu(id) {
    if (window.confirm("你是否要删除此学生？")) {
      deleteStuByIdApi(id).then(() => {
        navigate("/home", {
          state: {
            alert: "学生删除成功",
            type: "info"
          }
        })
      })
    }
  }

  return (
    <div className="details container">
      <button className="btn btn-default" onClick={() => navigate("/home")}>返回</button>
      <h1 className="page-header">
        {stu.name}
        <span className="pull-right">
          <button className="btn btn-primary" onClick={() => navigate(`/edit/${stu.id}`)} style={{ marginRight: 10 }}>修改</button>
          <button className="btn btn-danger" onClick={() => deleteStu(stu.id)}>删除</button>
        </span>
      </h1>
      {/* 第一组 */}
      <ul className="list-group">
        <li className="list-group-item">
          <span className="glyphicon glyphicon-phone">电话：{stu.phone}</span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-envelope">邮箱：{stu.email}</span>
        </li>
      </ul>
      {/* 第二组 */}
      <ul className="list-group">
        <li className="list-group-item">
          <span className="glyphicon glyphicon-book">文化水平：{stu.education}</span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-flag">毕业院校：{stu.graduationschool}</span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-briefcase">专业：{stu.profession}</span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-user">个人简介：{stu.profile}</span>
        </li>
      </ul>
    </div>
  )
}