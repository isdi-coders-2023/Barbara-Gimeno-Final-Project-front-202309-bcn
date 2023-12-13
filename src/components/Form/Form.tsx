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
      className="form"
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      <div className="form__wrapper__title">
        <label className="form__control" htmlFor="title">
          Pool type
        </label>
        <input
          id="title"
          type="text"
          className="form__input"
          required
          placeholder="Beach pool"
          onChange={onChangeForm}
          value={poolData.title}
        />
      </div>
      <div className="form__wrapper">
        <label className="form__control" htmlFor="measuresLong">
          Measures long meters
        </label>
        <input
          id="measuresLong"
          type="number"
          className="form__input"
          required
          placeholder="Measures long"
          onChange={onChangeForm}
          value={poolData.measuresLong}
        />
      </div>

      <div />
      <div className="form__wrapper">
        <label className="form__control" htmlFor="measuresHigh">
          Measures high meters
        </label>
        <input
          id="measuresHigh"
          type="number"
          className="form__input"
          required
          placeholder="Measures high"
          onChange={onChangeForm}
          value={poolData.measuresHigh}
        />
      </div>
      <div className="form__wrapper">
        <label className="form__control" htmlFor="measuresWide">
          Measures wide meters
        </label>
        <input
          id="measuresWide"
          type="number"
          className="form__input"
          required
          placeholder="measuresWide"
          onChange={onChangeForm}
          value={poolData.measuresWide}
        />
      </div>
      <div className="form__wrapper">
        <label
          className="form__control"
          htmlFor="since"
          aria-labelledby="since"
        >
          Since
        </label>
        <input
          id="since"
          type="number"
          className="form__input"
          required
          placeholder="yyyy"
          onChange={onChangeForm}
          value={poolData.since}
        />
      </div>
      <div className="form__wrapper">
        <label className="form__control" htmlFor="depuration">
          Depuration
        </label>
        <input
          id="depuration"
          type="text"
          className="form__input"
          required
          placeholder="electrolisis salty"
          onChange={onChangeForm}
          value={poolData.depuration}
        />
      </div>
      <div className="form__wrapper">
        <label className="form__control" htmlFor="material">
          Material
        </label>
        <textarea
          id="material"
          className="form__text-area"
          placeholder="Material"
          onChange={onChangeForm}
          value={poolData.material}
        />
      </div>
      <div className="form__wrapper__image">
        <label className="form__control" htmlFor="image">
          Image (url)
        </label>
        <input
          id="image"
          type="url"
          className="form__input"
          required
          placeholder={"https://www.google.com/image/pool.jpg"}
          onChange={onChangeForm}
          value={poolData.image}
        />
      </div>

      <Button type="submit" className="button__create" text="Create" />
    </PoolFormStyled>
  );
};

export default PoolForm;
