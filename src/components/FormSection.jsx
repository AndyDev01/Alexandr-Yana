import { useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    presence: "",
    drinks: [],
    food: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "drinks") {
        setFormData((prevData) => ({
          ...prevData,
          drinks: checked
            ? [...prevData.drinks, value]
            : prevData.drinks.filter((drink) => drink !== value),
        }));
      } else if (name === "food") {
        setFormData((prevData) => ({
          ...prevData,
          food: checked
            ? [...prevData.food, value]
            : prevData.food.filter((food) => food !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = "";
    const chatId = "";
    const text = `Имя Фамилия: ${formData.name}\nПрисутствие: ${
      formData.presence
    }\nПредпочтения по напиткам: ${formData.drinks.join(
      ", "
    )}\nПредпочтения по еде: ${formData.food.join(", ")}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        alert("Форма успешно отправлена!");
      } else {
        alert("Ошибка при отправке формы.");
      }
    } catch (error) {
      alert("Ошибка при отправке формы.");
    }
  };

  return (
    <form
      id="guest-form"
      onSubmit={handleSubmit}
      className="p-4 max-w-xl mx-auto bg-white py-16"
    >
      <p className="text-6xl font-greatvibes text-center pb-16">Анкета Гостя</p>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-lg font-bold mb-2 "
          htmlFor="name"
        >
          Имя Фамилия
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="appearance-none border-b border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.name}
          onChange={handleChange}
        />
        <p className="text-gray-600 text-xs italic">
          если вы будете с парой или с семьей, то внесите все имена, а также
          возраст детей
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Присутствие
        </label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="presence"
              value="Я приду / Мы придем"
              className="form-radio"
              checked={formData.presence === "Я приду / Мы придем"}
              onChange={handleChange}
            />
            <span className="ml-2">Я приду / Мы придем</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="presence"
              value="Скажу ответ позже"
              className="form-radio"
              checked={formData.presence === "Скажу ответ позже"}
              onChange={handleChange}
            />
            <span className="ml-2">Скажу ответ позже</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="presence"
              value="Прийти не получится"
              className="form-radio"
              checked={formData.presence === "Прийти не получится"}
              onChange={handleChange}
            />
            <span className="ml-2">Прийти не получится</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Предпочтения по напиткам
        </label>
        <p className="text-gray-600 text-xs italic mb-2">
          можно выбрать несколько вариантов
        </p>
        {[
          "Водка",
          "Коньяк",
          "Виски",
          "Шампанское",
          "Белое вино",
          "Красное вино",
        ].map((drink) => (
          <div key={drink}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="drinks"
                value={drink}
                className="form-checkbox"
                checked={formData.drinks.includes(drink)}
                onChange={handleChange}
              />
              <span className="ml-2">{drink}</span>
            </label>
          </div>
        ))}
      </div>
      <div>
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Предпочтения по еде
        </label>
        <p className="text-gray-600 text-xs italic mb-2">
          можно выбрать несколько вариантов
        </p>
        {["Мясо", "Рыба", "Курица"].map((food) => (
          <div key={food}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="food"
                value={food}
                className="form-checkbox"
                checked={formData.food.includes(food)}
                onChange={handleChange}
              />
              <span className="ml-2">{food}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-14">
        <button type="submit" className="bg-black text-white py-2 px-4 ">
          ОТПРАВИТЬ
        </button>
      </div>
    </form>
  );
};

export default FormSection;
