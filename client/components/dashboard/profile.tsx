import { ProfileComponentProps } from "@/lib/types";

const ProfileComponent = (props: ProfileComponentProps) => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="shadow-md rounded-lg p-6 max-w-[900px]">
          <div className="flex items-center space-x-8">
            <img
              src={props.imageURL}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">{props.name}</h2>
              <p className="text-gray-600">{props.bio}</p>
            </div>
          </div>
          <div className="mt-6 border-t pt-6">
            <p className="mb-4">
              <strong className="text-gray-500">Email:</strong>
              <span className="ml-2">{props.email}</span>
            </p>
            <p className="mb-4">
              <strong className="text-gray-500">Phone:</strong>
              <span className="ml-2">{props.phone}</span>
            </p>
            <p className="mb-4">
              <strong className="text-gray-500">Location:</strong>
              <span className="ml-2">{props.location}</span>
            </p>
            <p className="mb-4">
              <strong className="text-gray-500">Next Billing Cycle:</strong>
              <span className="ml-2">{props.billcycle}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
