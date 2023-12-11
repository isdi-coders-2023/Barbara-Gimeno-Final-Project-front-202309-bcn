import { useState } from "react";
import Button from "../Button/Button";
import { PoolDataStructure } from "../../store/features/pools/types";
import PoolFormStyled from "./PoolFormStyled";

interface PoolFormProps {
  onSubmit: (poolData: PoolDataStructure) => void;
}

const PoolForm = ({ onSubmit }: PoolFormProps): React.ReactElement => {
  const initialPoolFormState: PoolDataStructure = {
    title: "",
    measuresLong: 0,
    measuresHigh: 0,
    measuresWide: 0,
    since: 0,
    depuration: "",
    material: "",
    image: "",
  };

  const [PoolData, setPoolData] = useState(initialPoolFormState);

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPoolData({
      ...PoolData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    onSubmit(PoolData);
  };

  return (
    <PoolFormStyled
      className="pool-form"
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      {" "}
      <div className="pool-form__wrapper">
        <label className="pool-form__control">
          {" "}
          title
          <input
            id="title"
            type="text"
            className="pool-form__input"
            required
            placeholder="Beach pool"
            onChange={onChangeForm}
            value={PoolData.title}
          />
        </label>
        <label className="pool-form__control">
          {" "}
          Measures long meters
          <input
            id="measuresLong"
            type="number"
            className="pool-form__input"
            required
            placeholder="Measures long"
            onChange={onChangeForm}
            value={PoolData.measuresLong}
          />
        </label>
        <label className="pool-form__control">
          {" "}
          Measures high meters
          <input
            id="measuresHigh"
            type="text"
            className="pool-form__input"
            required
            placeholder="Measures high"
            onChange={onChangeForm}
            value={PoolData.measuresHigh}
          />
        </label>
        <label className="pool-form__control">
          {" "}
          Measure wide meters
          <input
            id="measuresWide"
            type="number"
            className="pool-form__input"
            required
            placeholder="measuresWide"
            onChange={onChangeForm}
            value={PoolData.measuresWide}
          />
        </label>
        <label className="pool-form__control">
          {" "}
          Since
          <input
            id="number"
            type="text"
            className="pool-form__input"
            required
            placeholder="yyyy"
            onChange={onChangeForm}
            value={PoolData.since}
          />
        </label>
        <label className="pool-form__control">
          {" "}
          Depuration
          <input
            id="depuration"
            type="text"
            className="pool-form__input"
            required
            placeholder="electrolisis salty"
            onChange={onChangeForm}
            value={PoolData.depuration}
          />
        </label>
        <label className="pool-form__control">
          {" "}
          Image (url)
          <input
            id="image"
            type="url"
            className="pool-form__input"
            required
            placeholder={"www.google.com/image/pool.jpg"}
            onChange={onChangeForm}
            value={PoolData.image}
          />
        </label>
        <label className="pool-form__control">
          {" "}
          material (optional)
          <textarea
            id="material"
            className="pool-form__text-area"
            placeholder="Material"
            onChange={onChangeForm}
            value={PoolData.material}
          />
        </label>
      </div>
      <Button className="pool-form__button" type={"submit"} text="Add" />
    </PoolFormStyled>
  );
};

export default PoolForm;
