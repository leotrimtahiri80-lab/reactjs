import React from "react";

function StudentsList() {
    const students = [
        {
            id: 1,
            name: "Ardit Krasniqi",
            age: 20,
            city: "Prishtinë"
            
        },
        {
            id: 2,
            name: "Elira Berisha",
            age: 22,
            city: "Prizren"
        },
        {
            id: 3,
            name: "Besnik Hoxha",
            age: 21,
            city: "Pejë"
        },
        {
            id: 4,
            name: "Drita Gashi",
            age: 19,
            city: "Gjakovë"
        },
        {
            id: 5,
            name: "Valon Thaçi",
            age: 23,
            city: "Ferizaj"
        },
        {
            id: 6,
            name: "Liridona Shala",
            age: 20,
            city: "Mitrovicë"
        },
        {
            id: 7,
            name: "Gentian Kelmendi",
            age: 24,
            city: "Gjilan"
        },
        {
            id: 8,
            name: "Arbesa Rexhepi",
            age: 21,
            city: "Podujevë"
        }
    ];
    const activeStudents = students.filter(student => student.city);
    const topStudent = students.filter(student => student.age > 20)
    return (
        <div>
            <ul>

                {students.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.age} - {student.city}
                    </li>
                ))}
            </ul>
            <hr />
            <ul>

                {activeStudents.map((student) => (
                    <li key={student.id}>
                        {student.city}
                    </li>
                ))}
            </ul>
            <hr />
            <ul>

                {topStudent.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.age} - {student.city}
                    </li>
                ))}
            </ul>
        </div>

    );
}



export default StudentsList;