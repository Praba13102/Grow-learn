import React from "react";

import i1 from "./assets/i1.jpg";
import i2 from "./assets/i2.jpg";
import i3 from "./assets/i3.jpg";
import i4 from "./assets/i4.jpg";
import i5 from "./assets/i5.jpg";
import i6 from "./assets/i6.jpg";
import i7 from "./assets/i7.jpg";
import i8 from "./assets/i8.jpg";
import java from "./assets/java.jpg";

import "@fortawesome/fontawesome-free/css/all.css";

const Courses = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<i key={i} className=" sar fas fa-star me-2"></i>);
  }

  const courses = [
    {
      a: "JavaScript And PHP Programming Complete Course",
      b: "PROPER DOT INSTITUTE",
      c: 4.2,
      d: 933,
      e: 399,
      f: 1799,
      g: i1,
    },
    {
      a: "Build a Quiz App with Java on Android Studio Beginner Course",
      b: "Vijay Kumar",
      c: 4.1,
      d: 463,
      e: 499,
      f: 1399,
      g: i2,
    },
    {
      a: "Microsoft Excel - Beginner to Advance with Example",
      b: "Meet Doshi",
      c: 4.5,
      d: 322,
      e: 599,
      f: 1599,
      g: i3,
    },
    {
      a: "JavaScript, jQuery & TypeScript: Full-Stack We...",
      b: "Sara Academy",
      c: 4.2,
      d: 423,
      e: 299,
      f: 1499,
      g: i4,
    },
  ];

  return (
    <div className="row mb-5">
      {courses.map((course, index) => (
        <div className="col-lg-3" key={index}>
          <div className="pimage mb-3">
            <img src={course.g} alt="phpjs" />
          </div>
          <h6 className=" opic fw-bold">{course.a}</h6>
          <p className="gre">{course.b}</p>
          <div className="d-flex align-items-center">
            <p className="fw-semibold me-2">{course.c}</p>
            <simg className="me-2">{stars}</simg>
            <p className="gre">({course.d})</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="fw-bold me-2">
              {"\u20B9"}
              {course.e}
            </p>
            <p className="gre">
              <s>
                {"\u20B9"}
                {course.f}
              </s>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Recom = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<i key={i} className=" sar fas fa-star me-2"></i>);
  }

  const courses = [
    {
      a: "2025 Master class on Data Science using Python A-Z f...",
      b: "Toppers Bootcamp",
      c: 4.2,
      d: 933,
      e: 399,
      f: 1799,
      g: i5,
    },
    {
      a: "JavaScript in HINDI (हिंदी)",
      b: "Suresh Patel.",
      c: 4.1,
      d: 463,
      e: 499,
      f: 1399,
      g: i6,
    },
    {
      a: "JAVA FULL STACK DEVELOPMENT (IN HINDI)...",
      b: "Nishant Kumar",
      c: 4.5,
      d: 322,
      e: 599,
      f: 1599,
      g: i7,
    },
    {
      a: "Full PHP CRASH Course | Core PHP Exercises 60+ wi...",
      b: "Faisal Zamir, Jafri Code",
      c: 4.2,
      d: 423,
      e: 299,
      f: 1499,
      g: i8,
    },
  ];

  return (
    <div className="row mb-5">
      {courses.map((course, index) => (
        <div className="col-lg-3" key={index}>
          <div className="pimage mb-3">
            <img src={course.g} alt="phpjs" />
          </div>
          <h6 className=" opic fw-bold">{course.a}</h6>
          <p className="gre">{course.b}</p>
          <div className="d-flex align-items-center">
            <p className="fw-semibold me-2">{course.c}</p>
            <simg className="me-2">{stars}</simg>
            <p className="gre">({course.d})</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="fw-bold me-2">
              {"\u20B9"}
              {course.e}
            </p>
            <p className="gre">
              <s>
                {"\u20B9"}
                {course.f}
              </s>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Picks = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<i key={i} className=" sar fas fa-star me-2"></i>);
  }

  const course = {
    a: "[NEW] Master Spring Boot 3 & Spring Framework 6 with Java",
    b: "Become Java Spring Boot Full Stack Developer. Learn Spring Framework, Spring Boot, Spring Data, Docker & AWS",
    c: 4.2,
    d: 933,
    e: 399,
    f: 1799,
  };
  // {a:"Build a Quiz App with Java on Android Studio Beginner Course",b:"Vijay Kumar",c:4.1,d:463,e:499,f:1399,g:i2},
  // {a:"Microsoft Excel - Beginner to Advance with Example",b:"Meet Doshi",c:4.5,d:322,e:599,f:1599,g:i3},
  // {a:"JavaScript, jQuery & TypeScript: Full-Stack We...",b:"Sara Academy",c:4.2,d:423,e:299,f:1499,g:i4},

  return (
    <div className="picks rounded-2 p-4 row mb-5">
      <div className="col-lg-6">
        <div className="qimage mb-3">
          <img src={java} alt="course.g" />
        </div>
      </div>
      <div className="col-lg-6">
        <h4 className=" fw-bold ">{course.a}</h4>
        <p>{course.b}</p>
        <p className="gre">By in28Minutes Official</p>
        <p className="gre">
          Updated <span className="fw-semibold">December 2024</span> 39 total
          hours 423 lectures All Levels
        </p>
        <div className="d-flex align-items-center pb-5 mb-4">
          <p className="fw-bold me-2">{course.c}</p>
          <simg className="me-2">{stars}</simg>
          <p className="gre">({course.d})</p>
        </div>
        <div className="d-flex align-items-center ">
          <h5 className="fw-bold me-2">
            {"\u20B9"}
            {course.e}
          </h5>
          <h5 className="gre">
            <s>
              {"\u20B9"}
              {course.f}
            </s>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Courses;
