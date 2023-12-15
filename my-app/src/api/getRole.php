<?

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require_once 'vendor/autoload.php';
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;
function getRole($jwt) {
    $seckey = "走れ轌よ、風の夜に、月海原を、パドルパドル";
    $decoded = JWT::decode($jwt, $seckey, array('HS256'));
    $email = $decoded->email;
    $sql = "SELECT * FROM utilisateur WHERE email = ?";
    $conn = new PDO("mysql:host=35.241.200.39;dbname=runquest", "root", "bku23456drz");
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row['administrateur'] == 1) {
            $response = array('role' => 'Administrateur');
        } else if ($row['organisateur'] == 1) {
            $response = array('role' => 'Organisateur');
        } else {
            $response = array('role' => 'Utilisateur');
        }
        echo json_encode($response);
    } else {
        $response = array('error' => 'Invalid username or password');
        echo json_encode($response);
    }
    $conn = null;
    return;
}

$jwt = $_POST['jwt'];
getRole($jwt);
?>