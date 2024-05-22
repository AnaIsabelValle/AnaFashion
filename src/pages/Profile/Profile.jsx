
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import UserService from "../../services/user.service";

const initialShipping = {
  id: "",
  username: "",
  email: "",
  firstname: "",
  lastname: "",
  country: "",
  province: "",
  city: "",
  zipcode: "",
  street: "",
  phone: "",
};

const Profile = () => {
  const [shipping, setShipping] = useState(initialShipping);
  const { isAuthenticated, user, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Checkout isAuthenticated :", isAuthenticated);

    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        console.log("getUserProfile: ", user);
        const userProfile = await UserService.getProfile(user.id);
        console.log("UserProfile : ", userProfile);

        const userShipping = {
          id: userProfile.id,
          username: userProfile.username,
          email: userProfile.email,
          firstname: userProfile.name?.firstname || "",
          lastname: userProfile.name?.lastname || "",
          country: userProfile.address?.country || "",
          province: userProfile.address?.province || "",
          city: userProfile.address?.city || "",
          zipcode: userProfile.address?.zipcode || "",
          street: userProfile.address?.street || "",
          phone: userProfile?.phone || "",
        };
        console.log("SHIPPING: ", userShipping);
        setShipping(userShipping);
      } catch (error) {
        console.log("Message : ", error.message);
        console.log("Response : ", error.response);
        console.log("Status : ", error.response?.status);

        if (error.message === "TokenExpired") {
          logoutUser();
          console.log("El token ha expirado");
          navigate("/login?redirect=/checkout");
        } else {
          console.log("Ha ocurrido un error al realizar la petición", error);
        }
      }
    };

    if (isAuthenticated) {
      getUserProfile();
    }
  }, [user, isAuthenticated, logoutUser, navigate]);

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const profile = {
        name: {
          firstname: shipping.firstname,
          lastname: shipping.lastname,
        },
        address: {
          country: shipping.country,
          province: shipping.province,
          city: shipping.city,
          zipcode: shipping.zipcode,
          street: shipping.street,
        },
        phone: shipping.phone,
      };

      await UserService.setProfile(shipping.id, profile);

      Swal.fire({
        icon: "success",
        title: `${shipping.username} is updated`,
        showConfirmButton: true,
        timer: 2500,
      });
    } catch (error) {
      console.error("Error al grabar los datos:", error);
    }
  };

  return (
    <>
      <div className="bg0 p-t-75 p-b-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-lr-auto m-b-50">
              <h5 className="mtext-109 cl2 p-b-30">DETALLES DE FACTURACIÓN</h5>

              <div className="form-row">
                <div className="form-group col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="exampleFormControlInput1">
                    Nombre <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    value={shipping.firstname}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="exampleFormControlInput1">
                    Apellidos <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    value={shipping.lastname}
                    onChange={handleChange}
                  />
                </div>
                {/* fin row */}
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                  País <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  id="country"
                  value={shipping.country}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                  Provincia / Estado <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="province"
                  id="province"
                  value={shipping.province}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                  Pueblo/Ciudad <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="city"
                  value={shipping.city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                  Dirección <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="street"
                  id="street"
                  placeholder="Street Address"
                  value={shipping.street}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label htmlFor="exampleFormControlInput1">
                    Teléfono <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    value={shipping.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group col-sm-6">
                  <label htmlFor="exampleFormControlInput1">
                    Código Postal/Zip <span>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="zipcode"
                    id="zipcode"
                    value={shipping.zipcode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-sm-12">
                  <div className="flex-r-m">
                    <Link
                      to="/"
                      className="m-lr-3 stext-103 cl2 size-101 btn btn-outline-dark hov-btn1 p-lr-15 trans-04"
                    >
                      Cancelar
                    </Link>
                    <button
                      className="stext-103 cl0 size-101 btn bg3 bor1 hov-btn3 p-lr-15 trans-04"
                      onClick={handleSave}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;


/**
 * The Profile component is responsible for displaying and updating
 * the user's shipping information. It requires the user to be authenticated. 
 * If not, it redirects the user to the login page.
 * (useEffect): This effect runs when the component mounts and checks if the user
 * is authenticated. If not, it redirects the user to the login page.
 * Fetch User Profile (useEffect): This effect fetches the user's profile information
 * from the server when the component mounts. It updates the shipping state with the retrieved information.
 * (handleChange): This function is called when there's a change in any of the input fields.
 * It updates the corresponding field in the shipping state.
 * (handleSave): This function is called when the user clicks the "Guardar" button to save 
 * the updated shipping information. It sends a request to the server to update the user's profile. 
 * If successful, it displays a success message using Swal (SweetAlert2).
 * The component renders a form with input fields for the user to enter their shipping details. 
 * It also includes buttons for saving changes and canceling. If the user is not authenticated,
 *  it displays nothing and redirects to the login page.
 */
 