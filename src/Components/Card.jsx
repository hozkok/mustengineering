function Card({ name, description, title }) {
  return (
    <div className="border-2 bg-[#e6e6ff98] border-[#0404fc] text px-6 py-3 shadow-md">
      <h2 className="font-bold text-2xl color-[#01014c] mb-2">
        {name} | <span className="text-base">{title}</span>
      </h2>
      <p className="font-medium text-base color-[#01014c]">{description}</p>
    </div>
  );
}

export default Card;
