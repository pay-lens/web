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
    const {
      dataset: { key },
      value,
    } = event.target;

    setFieldValues({
      ...fieldValues,
      [key]: value,
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

          <Input label="Company" data-key="company" onChange={updateFieldValues} type="text" value={fieldValues.company} />
          <Input label="Level" data-key="level" onChange={updateFieldValues} type="text" value={fieldValues.level} />
        </section>

        <section>
          <header>
            <h3>Details &amp; Experience</h3>
          </header>

          <Input label="Title" data-key="title" onChange={updateFieldValues} type="text" value={fieldValues.title} />
          <Input label="Job Family" data-key="jobFamily" onChange={updateFieldValues} type="text" value={fieldValues.jobFamily} />
          <Input label="Tag" data-key="tag" onChange={updateFieldValues} type="text" value={fieldValues.tag} />
          <Input
            label="Years of Experience"
            data-key="yearsExperience"
            onChange={updateFieldValues}
            type="number"
            value={fieldValues.yearsExperience}
          />
          <Input label="Years at Company" data-key="yearsCompany" onChange={updateFieldValues} type="number" value={fieldValues.yearsCompany} />

          <div>
            <label>
              <span>Location</span>
              <LocationSearchInput data-key="location" name="location" onChange={updateFieldValues} value={fieldValues.location} />
            </label>
          </div>
          <Input label="Remote" data-key="isRemote" onChange={updateFieldValues} type="checkbox" value={fieldValues.isRemote} />
        </section>

        <section>
          <header>
            <h3>Compensation</h3>
          </header>

          <Input
            label="Total Yearly Compensation"
            data-key="compensation.total"
            onChange={updateFieldValues}
            type="number"
            value={fieldValues.compensation}
          />
          <Input label="Salary (yearly)" data-key="compensation.salary" onChange={updateFieldValues} type="number" value={fieldValues.compensation} />
          <Input
            label="Stock Grant (yearly)"
            data-key="compensation.stocks"
            onChange={updateFieldValues}
            type="number"
            value={fieldValues.compensation}
          />
          <Input label="Bonus (avg/year)" data-key="compensation.bonus" onChange={updateFieldValues} type="number" value={fieldValues.compensation} />
        </section>

        <section>
          <header>
            <h3>Optional Information</h3>
          </header>

          <Input label="Gender" data-key="gender" onChange={updateFieldValues} type="text" value={fieldValues.gender} />
          <Input label="Race" data-key="race" onChange={updateFieldValues} type="text" value={fieldValues.race} />
          <Input label="Highest Academic Level" data-key="academicLevel" onChange={updateFieldValues} type="text" value={fieldValues.academicLevel} />
          <div>
            <label>
              <span>Other</span>
              <textarea data-key="notes" name="Notes" onChange={updateFieldValues} placeholder="Additional Notes" value={fieldValues.notes} />
            </label>
          </div>
        </section>

        <Button type="submit">Submit</Button>
      </Form>
    </Main>
  );
};

export default SalaryInputPage;
