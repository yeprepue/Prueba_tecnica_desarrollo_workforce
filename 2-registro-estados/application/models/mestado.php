<?php

class Mestado extends CI_Model
{
    function   __construct()
    {
        parent::__construct();
    }

    public function registrarEstado($estado)
    {
        $datos = array(
            'nombre' => $estado
        );

        $this->db->insert('estados', $datos);
        if ($this->db->affected_rows()) {
            return true;
        }
        return false;
    }
    
}
