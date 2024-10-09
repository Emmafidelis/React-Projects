import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
  password: z.number({ invalid_type_error: "Password is required" }).min(18),
});

type formData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  return (
    <form
      className="row g-3"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name && <p className="text-damger">{errors.name.message}</p>}
      </div>
      <div className="col-md-6">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          {...register("password", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="password"
        />
        {errors.password && (
          <p className="text-damger">{errors.password.message}</p>
        )}
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">
          Address 2
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          City
        </label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">
          State
        </label>
        <select id="inputState" className="form-select">
          <option value="1">Choose...</option>
          <option value="2">...</option>
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">
          Zip
        </label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Form;
