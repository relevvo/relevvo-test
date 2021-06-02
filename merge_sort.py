from pprint import pprint

def merge_sort(items):
  return merge(split(items), None)

def split(items):
  if len(items) == 1:
    return items

  if len(items) == 2:
    if items[1] > items[0]:
      return items
    else:
      return [items[1], items[0]]

  return merge(
    split(items[0 : int(len(items) / 2)]),
    split(items[int(len(items) / 2) : len(items)]),
  )

def merge(left, right):
  if right == None:
    return left

  result = []
  idx_left = 0
  idx_right = 0

  while True:
    if idx_left == len(left):
      return result + right[idx_right:]
    elif idx_right == len(right):
      return result + left[idx_left:]
    elif left[idx_left] < right[idx_right]:
      result.append(left[idx_left])
      idx_left += 1
    else:
      result.append(right[idx_right])
      idx_right += 1

pprint(merge_sort([1, 2, 3]))
pprint(merge_sort([2, 1, 3]))
pprint(merge_sort(['a', 'b', 'c']))
pprint(merge_sort(['b', 'a', 'c']))
pprint(merge_sort(list('The quick brown fox jumps over the lazy dog')))
