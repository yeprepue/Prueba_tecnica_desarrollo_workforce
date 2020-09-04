<?php

class Cestado extends CI_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->model('mestado');
    }

    public function index()
    {
        $this->load->view('estados/estado');
    }

    public function registrarEstado()
    {
        $estado = $this->input->post('estado');
        $res = $this->mestado->registrarEstado($estado);
        if ($res) {
            echo json_encode(array(
                "status" => 200,
                "msj" => "Registrado correctamente"
            ));
        } else {
            echo json_encode(array(
                "status" => 404
            ));
        }
    }
}
