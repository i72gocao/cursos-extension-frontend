function getAllCourses(setData) {
    try {
      fetch(process.env.REACT_APP_API_LOAD_HOME,{
        methd: "GET",
        headers: {
          "Content-Type":"application/json"
        }
      }).then(res => res.json())
      .then(data => {
        setData(data.data);
      })
    } catch (error) {
      console.log("Ha ocurrido un error al cargar los datos en el Home");
    }
}

function getAllCoursesByUser(auth,setData) {
    try {
      fetch(process.env.REACT_APP_API_SHOW_COURSE_BY_USER,{
        method: "GET",
        headers: {
          "Content-Type":"application/json",
          "id": auth
        }
      }).then(res => res.json())
      .then(data => {
        console.log("VIENOD DATA COURSE: ",data.data)
        setData(data.data);
      })
    } catch (error) {
      console.log("Ha ocurrido un error al cargar los datos en el Home");
    }
  }

const CourseService = {
    getAllCourses,
    getAllCoursesByUser
}

export default CourseService;