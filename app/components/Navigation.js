import React, { useContext, useState } from "react";
import { authContext } from "../lib/store/auth-context";
import { ImStatsBars } from "react-icons/im";
import { Button, Callout, Card, Dialog, DialogPanel, Metric, Text, Title } from "@tremor/react";
import { CheckCircleIcon  } from "@heroicons/react/solid";
function Nav() {
  const { user, loading, logout } = useContext(authContext);
  const [showLearn, setShowLearn] = useState(false);

  const Example = ({ onClose }) => {
    return (
      <Dialog open={true} onClose={onClose} static={true}>
      <DialogPanel>
      <Card className="max-w-md bg-white" >
          <Text className="text-xl font-bold" color="white">About BudgetMate</Text>
          <Text className="text-sm"color="white" >BudgetMate, Welcome to the world of finance and budgeting! Understanding how to manage your money is a crucial skill that empowers you to achieve your financial goals and secure your future. Here's a comprehensive guide to help you embark on your journey of learning finance and mastering the art of budgeting</Text>
          <Callout className="mt-4" title="Financial Empowerment" icon={CheckCircleIcon} color="green">
              <li>Gain control over your finances for informed decision-making.</li>
              <li>Empower yourself towards financial independence.</li>
          </Callout>
          <Callout className="mt-4" title="Goal Achievement" icon={CheckCircleIcon} color="orange">
              <li>Strategically plan for major life goals like homeownership, education, or retirement.</li>
              <li>Budgeting as a tool to allocate resources effectively, aiding goal attainment.</li>
          </Callout>
          <Callout className="mt-4" title="Debt Management" icon={CheckCircleIcon} color="amber">
              <li>Acquire strategies to efficiently manage and reduce debt.</li>
              <li>Develop a debt-free plan to avoid financial pitfalls.</li>
          </Callout>
          <Callout className="mt-4" title="Smart Saving " icon={CheckCircleIcon} color="fuchsia">
              <li>Understand the significance of saving for future financial growth.</li>
              <li>Implement effective saving strategies within a budget.</li>
          </Callout>
          <Callout className="mt-4" title="Financial Security" icon={CheckCircleIcon} color="yellow">
              <li>Establish an emergency fund for unforeseen expenses.</li>
              <li>Create a safety net ensuring financial stability during challenging times.</li>
          </Callout>
          
      </Card>
      

      <div className="mt-6">
        <Button variant="light" onClick={onClose}>
          Got it!
        </Button>
      </div>
    </DialogPanel>
</Dialog>
    );
  };

  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User information */}
        {user && !loading && (
          <div className="flex items-center gap-2">
            {/* img */}
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={user.photoURL}
                alt={user.displayName}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* name */}
            <small>Hi, {user.displayName}!</small>
          </div>
        )}

        {/* Right side of our navigation */}
        {user && !loading && (
          <nav className="flex items-center gap-4">
            <Button
              color="indigo"
              variant="secondary"
              onClick={() => setShowLearn(true)}
            >
              Learn
            </Button>
            <div>
              <a href="#stats">
                <ImStatsBars className="text-2xl" />
              </a>
            </div>
            <div>
              <button onClick={logout} className="btn btn-danger">
                Sign out
              </button>
            </div>
          </nav>
        )}

        {/* Render the Example component */}
        {showLearn && (
          <Example onClose={() => setShowLearn(false)} />
        )}
      </div>
    </header>
  );
}

export default Nav;
