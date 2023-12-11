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

  const [poolData, setPoolData] = useState(initialPoolFormState);

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPoolData({
      ...poolData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    onSubmit(poolData);
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
          Pool type
          <input
            id="title"
            type="text"
            className="pool-form__input"
            required
            placeholder="Beach pool"
            onChange={onChangeForm}
            value={poolData.title}
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
            value={poolData.measuresLong}
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
            value={poolData.measuresHigh}
          />
        </label>
        <label className="pool-form__control">
          {" "}
          Measures wide meters
          <input
            id="measuresWide"
            type="number"
            className="pool-form__input"
            required
            placeholder="measuresWide"
            onChange={onChangeForm}
            value={poolData.measuresWide}
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
            value={poolData.since}
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
            value={poolData.depuration}
          />
        </label>
        <label className="pool-form__control">
          {" "}
          Material
          <textarea
            id="material"
            className="pool-form__text-area"
            placeholder="Material"
            onChange={onChangeForm}
            value={poolData.material}
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
            placeholder={"https://www.google.com/image/pool.jpg"}
            onChange={onChangeForm}
            value={poolData.image}
          />
        </label>
      </div>
      <Button className="pool-form__button" type={"submit"} text="Create" />
    </PoolFormStyled>
  );
};

export default PoolForm;
