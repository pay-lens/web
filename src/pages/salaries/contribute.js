import { useState } from "react";
import styled from "styled-components";

import Button from "../../components/atoms/Button/Button";
import LocationSearchInput from "../../components/molecules/LocationSearchInput/LocationSearchInput";
import Input from "../../components/atoms/Input/Input";

import { pxToEm } from "../../styles/utils/converters";

const Main = styled.main`
  padding: ${pxToEm(100)} 15vw;
`;
const Form = styled.form`
  section {
    margin-bottom: ${pxToEm(30)};
  }
`;

const SalaryInputPage = () => {
  const [fieldValues, setFieldValues] = useState({
    // Company Info
    company: "",
    level: "",

    // Details & Experience
    title: "",
    jobFamily: "",
    tag: "",
    yearsExperience: 0,
    yearsCompany: 0,
    location: {
      city: "",
      state: "",
    },
    isRemote: false,

    // Compensation
    compensation: {
      total: 0,
      salary: 0,
      stocks: 0,
      bonus: 0,
    },

    // Optional
    gender: "",
    race: "",
    academicLevel: "",
    notes: "",
  });

  const updateFieldValues = (event) => {
    const { name, value } = event.target;

    setFieldValues({
      ...fieldValues,
      [name]: value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <Main>
      <Form onSubmit={submitForm}>
        <section>
          <header>
            <h3>Company Information</h3>
          </header>

          <Input label="Company" key="company" onChange={updateFieldValues} type="text" value={fieldValues.company} />
          <Input label="Level" key="level" onChange={updateFieldValues} type="text" value={fieldValues.level} />
        </section>

        <section>
          <header>
            <h3>Details &amp; Experience</h3>
          </header>

          <Input label="Title" key="title" onChange={updateFieldValues} type="text" value={fieldValues.title} />
          <Input label="Job Family" key="jobFamily" onChange={updateFieldValues} type="text" value={fieldValues.jobFamily} />
          <Input label="Tag" key="tag" onChange={updateFieldValues} type="text" value={fieldValues.tag} />
          <Input label="Years of Experience" key="yearsExperience" onChange={updateFieldValues} type="number" value={fieldValues.yearsExperience} />
          <Input label="Years at Company" key="yearsCompany" onChange={updateFieldValues} type="number" value={fieldValues.yearsCompany} />

          <div>
            <label>
              <span>Location</span>
              <LocationSearchInput key="location" name="location" onChange={updateFieldValues} value={fieldValues.location} />
            </label>
          </div>
          <Input label="Remote" key="isRemote" onChange={updateFieldValues} type="checkbox" value={fieldValues.isRemote} />
        </section>

        <section>
          <header>
            <h3>Compensation</h3>
          </header>

          <Input
            label="Total Yearly Compensation"
            key="compensation.total"
            onChange={updateFieldValues}
            type="number"
            value={fieldValues.compensation}
          />
          <Input label="Salary (yearly)" key="compensation.salary" onChange={updateFieldValues} type="number" value={fieldValues.compensation} />
          <Input label="Stock Grant (yearly)" key="compensation.stocks" onChange={updateFieldValues} type="number" value={fieldValues.compensation} />
          <Input label="Bonus (avg/year)" key="compensation.bonus" onChange={updateFieldValues} type="number" value={fieldValues.compensation} />
        </section>

        <section>
          <header>
            <h3>Optional Information</h3>
          </header>

          <Input label="Gender" key="gender" onChange={updateFieldValues} type="number" value={fieldValues.gender} />
          <Input label="Race" key="race" onChange={updateFieldValues} type="number" value={fieldValues.race} />
          <Input label="Highest Academic Level" key="academicLevel" onChange={updateFieldValues} type="number" value={fieldValues.academicLevel} />
          <div>
            <label>
              <span>Other</span>
              <textarea key="notes" name="Notes" onChange={updateFieldValues} placeholder="Additional Notes" value={fieldValues.notes} />
            </label>
          </div>
        </section>

        <Button type="submit">Submit</Button>
      </Form>
    </Main>
  );
};

export default SalaryInputPage;
