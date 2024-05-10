import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const valSubmit = (data) => console.log(data)
    const onSubmit = async data => {
        if (data.correo === "david@gmail.com") {
            Swal.fire({
                title: 'Validacion correcta',
                text: 'Puede continuar',
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
        } else {
            Swal.fire({
                title: 'Validacion incorrecta',
                text: 'No puede continuar',
                icon: 'error',
                confirmButtonText: 'Cerrar'
              })
        }
      };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="fw-bold">Correo</label>
                    <input type="email" placeholder="example@gmail.com" className="form-control" {...register("correo", { required: true })}/>
                    {errors.correo && <div className="alert alert-danger mt-2" role="alert">El correo es requerido</div>}
                </div>
                <div className="mb-3">
                    <label className="fw-bold">Password</label>
                    <input type="password" placeholder="password" className="form-control" {...register("password", { required: true })}/>
                    {errors.password && <div className="alert alert-danger mt-2" role="alert">El password es requerido</div>}
                </div>
                <div className="d-flex flex-column mt-4">
                    <button className="btn btn-primary">Iniciar Sesion</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm