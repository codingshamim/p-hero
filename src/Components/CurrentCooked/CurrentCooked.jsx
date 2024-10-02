const CurrentCooked = ({currentCook}) => {
       const {recipe_id,recipe_name, preparing_time,calories} = currentCook
       return (
              <div>
                     <div className="mt-2 px-3 mb-2">
                            <table className=" bg-slate-200 w-full text-xs py-5 border-separate">
                            <tbody>
                            <tr className="bg-base-200">
                                   <th>{recipe_id}</th>
                                   <td>{recipe_name}</td>
                                   <td>{preparing_time}</td>
                                   <td>{calories}</td>
                            </tr>
                            </tbody>
                            </table>
                     </div>
              </div>
       );
};

export default CurrentCooked;