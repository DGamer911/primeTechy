import recentSearches from "../data/RecentSearches";

function RecentSearches() {
  return (
    <div>
      <ul class="list-group">

        {recentSearches.map(item => (
            <li class="list-group-item">{item.name}</li>
        ))}

      </ul>
    </div>
  );
}

export default RecentSearches;
