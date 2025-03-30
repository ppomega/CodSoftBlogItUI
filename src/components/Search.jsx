import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function Search({ q, search }) {
  const [results, setResults] = useState([]);
  useEffect(() => {}, []);
  useEffect(() => {
    query(q);
  }, [q]);
  const navigate = useNavigate();
  function SubStr(str_1, str_2) {
    var f = 0;
    var a = 0;
    var y = false;
    var h = true;
    var str1 = str_1?.toLowerCase().trim().split(" ").join("");
    var str2 = str_2?.toLowerCase().trim().split(" ").join("");
    for (var i = 0; i <= str1?.length - 1; i++) {
      for (var j = a; j <= str2?.length - 1; j++) {
        if (h) {
          if (str1[i] == str2[j]) {
            a = j + 1;
            f += 1;
            y = true;
            h = false;
            break;
          }
        } else if (y) {
          if (str1[i] == str2[j]) {
            f += 1;
            a = j + 1;
            break;
          } else {
            y = false;
            break;
          }
        }
      }

      if (!y) {
        break;
      }
    }
    if (f == str1?.length) {
      return true;
    } else {
      return false;
    }
  }

  function Collt(st1, datas) {
    var result = [null];
    var t = 0;
    while (t < datas.length) {
      if (SubStr(st1, datas[t].username)) {
        result.push(datas[t]);
      }
      t++;
    }
    return result;
  }

  async function query(q) {
    async function userFetch() {
      await axios.get(import.meta.env.VITE_SERVER + "/users").then((r) => {
        const re = Collt(q, r.data);
        re.shift();
        setResults(re);
      });
    }
    await userFetch();
  }
  return (
    <div
      onClick={() => {
        search(false);
      }}
      className="h-screen min-w-full fixed top-0 bg-gray-500/30  backdrop-blur-md
 z-10"
    >
      {results != null ? (
        <div className="sticky top-20 z-30 bg-transparent flex">
          {results.map((i) => {
            return (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/user", { state: i });
                  search(false);
                }}
                className="text-white w-36 h-8 rounded-lg px-4 mx-10 my-8  bg-black/50"
              >
                {i.username}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Search;
