name_of_students=[];
function submit(){
    var name1=document.getElementById("S1").value;
    var name2=document.getElementById("S2").value;
    var name3=document.getElementById("S3").value;
    var name4=document.getElementById("S4").value;
    name_of_students.push(name1);
    name_of_students.push(name2);
    name_of_students.push(name3);
    name_of_students.push(name4);
    console.log(name_of_students);
    document.getElementById("answer").innerHTML=name_of_students;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sort(){
    name_of_students.sort();
    console.log(name_of_students);
    document.getElementById("answer").innerHTML=name_of_students;
}