import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/constants';


function Checkout() {
    const navigate = useNavigate();

    /*  useEffect(() => {
         navigate("/products/:id");
      },[navigate]) */

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        pais: '',
        provincia: '',
        ciudad: '',
        direccion: '',
        codigoPostal: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/users/1`);
                if (!response.ok) {
                    throw new Error('Error al cargar los datos del usuario');
                }
                const userData = await response.json();
                const { name, addres, phone } = userData;
                setFormData({
                    nombre: name.firstname || '',
                    apellidos: name.lastname || '',
                    telefono: phone || '',
                    pais: addres.country || '',
                    provincia: addres.province || '',
                    ciudad: addres.city || '',
                    direccion: addres.street || '',
                    codigoPostal: addres.zipcode || ''
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleRealizarPedido = () => {
        window.alert("Hola handleRealizarPedido..");
    };

    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8">
                    <h5 className="section-title position-relative text-uppercase mb-3">
                        <span>Detalle de facturación</span>
                    </h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Nombre</label>
                                <input className="form-control" type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Apellidos</label>
                                <input className="form-control" type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} placeholder="Apellidos" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>No Teléfono</label>
                                <input className="form-control" type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="No Teléfono" />
                            </div>

                            <div className="col-md-6 form-group">
                                <label>País</label>
                                <input className="form-control" type="text" name="pais" value={formData.pais} onChange={handleChange} placeholder="País" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Provincia/Estado</label>
                                <input className="form-control" type="text" name="provincia" value={formData.provincia} onChange={handleChange} placeholder="Provincia/Estado" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Pueblo/Ciudad</label>
                                <input className="form-control" type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} placeholder="Pueblo/Ciudad" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Dirección</label>
                                <input className="form-control" type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Dirección" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Código Postal / Zip</label>
                                <input className="form-control" type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} placeholder="Código Postal / Zip" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                        <h4 className="mtext-109 cl2 p-b-30">
                            Total de la Cesta
                        </h4>
                        <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    Productos:
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    Total
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    Artículo 1.
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    40 €
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    Artículo 2
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    45 €
                                </span>
                            </div>
                        </div>
                        <div className="flex-w flex-t p-t-27 p-b-33">
                            <div className="size-208 d-flex align-items-center">
                                <span className="mtext-101 cl2">
                                    Subtotal
                                </span>
                            </div>
                            <div className="size-208 d-flex align-items-center">
                                <span className="mtext-101 cl2">
                                    85 €
                                </span>
                            </div>
                        </div>
                        <div className="size-208 d-flex align-items-center">
                            <span className="mtext-101 cl2">
                                Total
                            </span>
                            <span className="mtext-101 cl2 ml-auto">
                                85 €
                            </span>
                        </div>
                        <div className="mt-4">
                            <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" onClick={handleRealizarPedido} >
                                Realizar Pedido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
