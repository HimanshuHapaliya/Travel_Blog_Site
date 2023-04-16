<?php
    $servername="localhost";
    $username="root";
    $password="";
    $dbname="test";

    $conn=new mysqli($servername,$username,$password,$dbname);

    if(!$conn)
    {
        echo "Connection failed";
    }
    if(isset($_POST['submit']))
    {
        $sql=$conn->prepare("INSERT INTO travelmessage VALUES (?,?,?,?)");
        $sql->bind_param("ssis",$_POST['fullname'],$_POST['usermail'],$_POST['mono'],$_POST['usermg']);
        if($sql->execute())
        {
            echo "<script>alert('Thank you for message')</script>";
        }
        $sql->close();
        echo"Data successfully added";
    }
    $conn->close();
?>