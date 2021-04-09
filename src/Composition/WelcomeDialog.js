import FancyBorder from './FancyBorder';

export default function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h2 className="Dialog-title">Welcome</h2>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}