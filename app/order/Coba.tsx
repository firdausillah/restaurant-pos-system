import React, { useState, useRef } from 'react';

// Child Component 1 Props
interface Child1Props {
  onFormSubmit: (formData: FormData) => void;
  onCustomCommand: () => void; // Menambahkan prop untuk perintah kustom
}

// Child Component 1
const Child1 = React.forwardRef<HTMLFormElement, Child1Props>((props, ref) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onFormSubmit(formData);
  };

  const handleCustomCommand = () => {
    props.onCustomCommand(
        ); // Menjalankan perintah kustom
        console.log('bisa');
  };



  return (
    <div>
      <h2>Child Component 1</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Input 1:
          <input type="text" name="input1" onChange={handleInputChange} />
        </label>
        <label>
          Input 2:
          <input type="text" name="input2" onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleCustomCommand}>Custom Command</button>
    </div>
  );
});

// Child Component 2
interface Child2Props {
  onReset: () => void;
}

const Child2: React.FC<Child2Props> = ({ onReset }) => {
  return (
    <div>
      <h2>Child Component 2</h2>
      <button onClick={onReset}>Reset Form</button>
    </div>
  );
};

// Parent Component
const Parent = () => {
  const child1Ref = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (formData: FormData) => {
    console.log('Form Data:', formData);
  };

  const handleCustomCommand = () => {
    console.log('Custom command triggered');
    // Lakukan logika kustom di sini
  };

  const handleResetForm = () => {
    if (child1Ref.current) {
      child1Ref.current.resetForm(); // Memanggil fungsi resetForm dari Child1
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child1 ref={child1Ref} onFormSubmit={handleFormSubmit} onCustomCommand={handleCustomCommand} />
      <Child2 onReset={handleResetForm} />
    </div>
  );
};

export default Parent;