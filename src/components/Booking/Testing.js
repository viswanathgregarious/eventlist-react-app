import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

import "./styles.css";

let renderCount = 0;

function Testing() {
  const { register, control, handleSubmit, reset } = useForm();
  const { fields, append } = useFieldArray(
    {
      control,
      name: "test"
    }
  );

  const onSubmit = data => console.log("data", data);

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      <Controller
      as={<input />}
      name={`hello`}
      control={control}
    />
 
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                name={`test[${index}].firstname`}
                ref={register()}
              />

              <Controller
                as={<input />}
                name={`test[${index}].lastname`}
                control={control}
              />
            </li>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append();
          }}
        >
          append
        </button>

       

        <button
          type="button"
          onClick={() =>
            reset({
              test: []
            })
          }
        >
          reset
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}

export default Testing;
