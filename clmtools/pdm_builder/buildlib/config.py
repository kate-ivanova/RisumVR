from os.path import basename, isfile, join

def valid_file(d, f):
  fn = join(data_folder, d, f)
  return isfile(fn) and not (f.startswith(".") or f.lower().endswith(".md"))

# mirror scheme
mirror_map = [12,11,10,9,8,7,6,5,4,3,2,50,49,48,47,46,45,44,55,54,53,52,51,58,57,56,61,60,59]
# path for drawing face
path = {\
   'normal' : [\
      [2,3,4,5,6,7,8,9,10,11,12],\
      [34,35,36,42,37,43,38,39,40],\
      [44,45,46,47,48,49,50,51,52,53,54,55,44,56,57,58,50,59,60,61,44],
   ], \
   'vertices' : [\
      [3,4,44,3],\
      [3,44,36,3],\
      [4,44,55,4],\
      [4,5,55,4],\
      [5,55,54,5],\
      [5,6,54,5],\
      [6,53,54,6],\
      [6,7,53,6],\
      [7,8,53,7],\
      [8,52,53,8],\
      [8,9,52,8],\
      [9,51,52,9],\
      [9,10,51,9],\
      [10,50,51,10],\
      [10,11,50,10],\
      [44,45,61,44],\
      [45,46,61,45],\
      [46,47,61,46],\
      [47,61,60,47],\
      [47,59,60,47],\
      [47,48,59,47],\
      [48,49,59,48],\
      [49,50,59,49],\
      [50,51,58,50],\
      [51,52,58,51],\
      [52,57,58,52],\
      [52,53,57,52],\
      [53,54,57,53],\
      [54,56,57,54],\
      [54,55,56,54],\
      [44,55,56,44],\
   ]\
}

# list of new positions of array 1
num_patches = 32

# wanted width of pdm
# a width of 100 will give ocular distance of approximately ?
#modelwidth = 400
modelwidth = 65 # default for creating pdm
#modelwidth = 40 # default for creating detection filters

# wanted patchsize, must be odd
patch_size = 11 # default for creating SVM filters
#patch_size = 16 # default for creating MOSSE filters

# raw image folder
data_folder = "./data/"
images = "./data/images/"
annotations = "./data/annotations.csv"
