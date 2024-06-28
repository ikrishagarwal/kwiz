import { Pill } from "./elements/pill";

export const LeaderBoard = ({}) => {
  return (
    <section className="bg-kiwi-600 rounded-xl p-8 m-8 box-border">
      <section className="flex justify-center">
        <Pill content="LeaderBoard"></Pill>
      </section>
      <section className="mt-6 h-full text-white tracking-wider leading-relaxed flex justify-center">
        <section className="w-fit overflow-scroll scrollbar">
          <table className="table-auto leaderboard-table">
            <thead className="border-b-2 border-kiwi-100">
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Malcolm Lockyer</td>
                <td>9/10</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>5/10</td>
              </tr>
              <tr>
                <td>Michael Hoffmann</td>
                <td>7/10</td>
              </tr>
              <tr>
                <td>Malcolm Lockyer</td>
                <td>9/10</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>5/10</td>
              </tr>
              <tr>
                <td>Michael Hoffmann</td>
                <td>7/10</td>
              </tr>
              <tr>
                <td>David Smith</td>
                <td>8/10</td>
              </tr>
              <tr>
                <td>Malcolm Lockyer</td>
                <td>9/10</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>5/10</td>
              </tr>
              <tr>
                <td>Michael Hoffmann</td>
                <td>7/10</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
};
