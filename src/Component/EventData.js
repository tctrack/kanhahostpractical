import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EventData = () => {

    const eventList = useSelector((state) => state.users);

    console.log(eventList);
    console.log(eventList.length);

    if (eventList.length > 0) {
        return (
          <>
            <section className="text-gray-600 body-font">
              <div className="container px-10 py-16 mx-auto">
                <h1 className="text-3xl font-medium title-font mb-10 text-gray-900 text-center">
                  Event List
                </h1>
                <div className="w-full mx-auto overflow-auto">
                  <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          Event name
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Event Type
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Start date
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          End date
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Description
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Handle By
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Organisation
                        </th>
                        <th className="title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                          Sub Events No.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {eventList?.map(
                        ({
                          eventName,
                          eventType,
                          startDate,
                          endDate,
                          description,
                          eventHandle,
                          eventOrg,
                          subEventNo,
                        }) => (
                          <tr>
                            <td className="px-4 py-3">{eventName}</td>
                            <td className="px-4 py-3">{eventType}</td>
                            <td className="px-4 py-3">{startDate}</td>
                            <td className="px-4 py-3">{endDate}</td>
                            <td className="px-4 py-3">{description}</td>
                            <td className="px-4 py-3">{eventHandle}</td>
                            <td className="px-4 py-3">{eventOrg}</td>
                            <td className="px-4 py-3">{subEventNo}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </>
        );
      } else {
        return (
          <>
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    No Events Found
                  </h1>
                  <p className="mb-8 leading-relaxed">Please Add your events</p>
                  <div className="flex justify-center">
                    <Link to={"/"} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Add events</Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      }
}

export default EventData