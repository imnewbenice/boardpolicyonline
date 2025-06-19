import os
import json
from datetime import datetime
from dateutil import parser as dateparser

def get_json_date(filename):
    try:
        date_str = filename.replace("scraped_policies_", "").replace(".json", "")
        return dateparser.parse(date_str)
    except:
        return None

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(data, path):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def main():
    data_dir = "data"
    files = [f for f in os.listdir(data_dir) if f.startswith("scraped_policies_") and f.endswith(".json")]
    dated = [(get_json_date(f), f) for f in files if get_json_date(f)]
    if len(dated) < 2:
        print("❌ Not enough files to compare.")
        return

    dated.sort(reverse=True)
    newest, previous = dated[0][1], dated[1][1]

    new_data = load_json(os.path.join(data_dir, newest))
    old_data = load_json(os.path.join(data_dir, previous))

    result = {}

    for chapter in new_data:
        result[chapter] = []
        new_items = {item['id']: item for item in new_data[chapter]}
        old_items = {item['id']: item for item in old_data.get(chapter, [])}

        all_ids = set(new_items) | set(old_items)
        for pid in sorted(all_ids):
            new = new_items.get(pid)
            old = old_items.get(pid)
            if new and not old:
                new['status'] = '➕ Added'
            elif not new and old:
                new = old.copy()
                new['status'] = '➖ Removed'
            elif new and old:
                if new['hash'] != old['hash']:
                    new['status'] = '♻️ Changed'
                else:
                    new['status'] = '✅ Unchanged'
            result[chapter].append(new)

    save_json(result, os.path.join(data_dir, "latest.json"))
    print(f"✅ Compared {newest} to {previous} and saved latest.json")

if __name__ == "__main__":
    main()